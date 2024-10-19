const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');
const { Parser } = require('json2csv');
const downloadFile = require('./file_downloader');

// PDF Report
const generatePDFReport = async (reportData, metrics) => {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));

    return new Promise(async (resolve, reject) => {
        doc.on('end', () => {
            const buffer = Buffer.concat(buffers);

            const filename = `reports_after_saving/financial_report_${Date.now()}.pdf`;
            
            downloadFile(buffer, filename);

            resolve(buffer);
        });

        doc.on('error', reject);

        // PDF Content
        doc.fontSize(18).text('Financial Report', { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Metrics: ${metrics.join(', ')}`);
        doc.moveDown();

        for (const [key, value] of Object.entries(reportData)) {
            doc.fontSize(12).text(`${key}: ${value}`);
        }

        doc.end();
    });
};

// EXCEL Report
const generateExcelReport = async (reportData, metrics) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Financial Report');

    // Title Row
    worksheet.addRow(['Financial Report']);
    worksheet.addRow([]);
    worksheet.addRow(['Metrics', metrics.join(', ')]);

    // Data Rows
    worksheet.addRow([]);
    for (const [key, value] of Object.entries(reportData)) {
        worksheet.addRow([key, value]);
    }

    const buffer = await workbook.xlsx.writeBuffer();

    const filename = `reports_after_saving/financial_report_${Date.now()}.xlsx`;

    downloadFile(buffer, filename);

    return buffer;
};


// CSV Report
const generateCSVReport = async (reportData, metrics) => {
    const data = [{ metrics: metrics.join(', '), ...reportData }];
    const parser = new Parser();
    const csv = parser.parse(data);

    const buffer = Buffer.from(csv);

    const filename = `reports_after_saving/financial_report_${Date.now()}.csv`;

    downloadFile(buffer, filename);

    return buffer;
};


module.exports = {
    generatePDFReport,
    generateExcelReport,
    generateCSVReport,
};
