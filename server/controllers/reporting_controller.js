const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transaction_model');
const { generatePDFReport, generateExcelReport, generateCSVReport } = require('../utils/report_generators');

const generateReport = asyncHandler(async (req, res) => {
    const { timePeriod, metrics, format } = req.body;


    const startDate = new Date(`${timePeriod.startDate}T00:00:00.000Z`);
    const endDate = new Date(`${timePeriod.endDate}T23:59:59.999Z`);

    if (isNaN(startDate) || isNaN(endDate)) {
        return res.status(400).json({ message: 'Invalid date format. Please use "YYYY-MM-DD".' });
    }

    const reportData = await generateReportData(startDate, endDate, metrics);
    if (!reportData) {
        return res.status(400).json({ message: 'Failed to generate report data' });
    }


    let reportBuffer;
    switch (format.toLowerCase()) {
        case 'pdf':
            reportBuffer = await generatePDFReport(reportData, metrics,);
            res.setHeader('Content-Type', 'application/pdf');
            break;
        case 'excel':
            reportBuffer = await generateExcelReport(reportData, metrics,);
            res.set({
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename=financial_report.xlsx',
            });
            break;
        case 'csv':
            reportBuffer = await generateCSVReport(reportData, metrics);
            res.setHeader('Content-Type', 'text/csv');
            break;
        default:
            return res.status(400).json({ message: 'Invalid report format. Supported formats are PDF, Excel, and CSV.' });
    }

    res.status(200).send(reportBuffer);
});



// Report Data Helper Function
const generateReportData = async (startDate, endDate, metrics) => {
    const reportData = {};

    const transactions = await Transaction.find({
        date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    if (metrics.includes('income')) {
        reportData.income = transactions
            .filter((transaction) => transaction.type === 'income')
            .reduce((sum, transaction) => sum + transaction.amount, 0);
    }

    if (metrics.includes('expenses')) {
        reportData.expenses = transactions
            .filter((transaction) => transaction.type === 'expense')
            .reduce((sum, transaction) => sum + transaction.amount, 0);
    }

    if (metrics.includes('cashFlow')) {
        reportData.cashFlow = (reportData.income || 0) - (reportData.expenses || 0);
    }

    return reportData;
};

module.exports = generateReport

