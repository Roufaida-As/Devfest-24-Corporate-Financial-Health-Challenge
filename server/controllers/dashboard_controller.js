const Transaction = require('./../models/transaction_model')
const asyncHandler = require("express-async-handler");
const getWeekNumber = require('../utils/get_week_number');
const calculatePercentageChange = require('../utils/calculate_percentage_change');

exports.getCashFlowData = asyncHandler(async (req, res) => {
    const { year } = req.query;

    const numericYear = parseInt(year, 10);
    if (isNaN(numericYear) || numericYear.toString().length !== 4) {
        return res.status(400).json({ message: 'Invalid year provided. Please provide a valid 4-digit year.' });
    }


    const startDate = new Date(`${numericYear}-01-01T00:00:00Z`);
    const endDate = new Date(`${numericYear}-12-31T23:59:59Z`);

    // Fetch transactions for the specified year
    const transactions = await Transaction.find({
        date: {
            $gte: startDate,
            $lte: endDate
        }
    });

    // Group transactions by month
    const cashFlow = transactions.reduce((acc, transaction) => {
        const month = transaction.date.getMonth() + 1;
        if (!acc[month]) {
            acc[month] = { income: 0, expenses: 0 };
        }
        if (transaction.type === 'income') {
            acc[month].income += transaction.amount;
        } else {
            acc[month].expenses += transaction.amount;
        }
        acc[month].netCashFlow = acc[month].income - acc[month].expenses;
        return acc;
    }, {});

    res.status(200).json({ cashFlow });
});

exports.getWeeklyIncomeExpense = asyncHandler(async (req, res) => {

    const { startDate, endDate } = req.query;
    const transactions = await Transaction.find({ date: { $gte: new Date(startDate), $lte: new Date(endDate) } });

    // Group by week
    const weeklyData = {};
    transactions.forEach(transaction => {
        const week = getWeekNumber(transaction.date);
        if (!weeklyData[week]) {
            weeklyData[week] = { income: 0, expenses: 0 };
        }
        if (transaction.type === 'income') {
            weeklyData[week].income += transaction.amount;
        } else {
            weeklyData[week].expenses += transaction.amount;
        }
    });

    // Calculate percentage changes
    const weeklyDataWithPercentage = calculatePercentageChange(weeklyData);

    res.status(200).json({ weeklyData: weeklyDataWithPercentage });

});

exports.getSpendingByCategory = asyncHandler(async (req, res) => {

    const { month, year } = req.query;
    const numericYear = parseInt(year, 10);
    const numericMonth = parseInt(month, 10);

    const startDate = new Date(`${numericYear}-${numericMonth}-01`);
    const endDate = new Date(`${numericYear}-${numericMonth}-31`);

    const transactions = await Transaction.aggregate([
        { $match: { date: { $gte: startDate, $lte: endDate }, type: 'expense' } },
        {
            $group: {
                _id: '$category',
                totalAmount: { $sum: '$amount' }
            }
        },
        {
            $project: {
                category: '$_id', // Rename _id to category
                totalAmount: 1,
                _id: 0
            }
        }
    ]);

    res.status(200).json({ spendingByCategory: transactions });

});

exports.getTransactionsWithCompanies = asyncHandler(async (req, res) => {
    const { company } = req.query;
    const transactions = await Transaction.find({ company });
    res.status(200).json({ transactions });

});



