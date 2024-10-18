const trans = require('./../models/transaction_model');
const asyncHandler = require('express-async-handler')

let io;

const setSocketIO = (socketIO) => {
    io = socketIO;
}

const addTransaction = async (req, res) => {
    const { type, amount, category, description, company } = req.body;

    const newTransaction = await trans.create({
        type,
        amount,
        category,
        description,
        company,
        userId: req.user._id,
    })

    // Emit event when a transaction is added
    if (io) {
        io.emit('transactionAdded', newTransaction);
    }

    res.status(201).json({
        message: 'Transaction added successfully',
        transaction: newTransaction
    });

};


const getTransactions = asyncHandler(async (req, res) => {
    const transactions = await trans.find({ userId: req.user._id });
    res.status(200).json(transactions);

});


const getTransactionById = asyncHandler(async (req, res) => {
    const transaction = await trans.findById(req.params.id);
    if (!transaction || transaction.userId.toString() !== req.user._id) {
        return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);

});


const updateTransaction = asyncHandler(async (req, res) => {

    const transaction = await trans.findById(req.params.id);
    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
    }

    const { type, amount, category, description, company } = req.body;
    transaction.type = type || transaction.type;
    transaction.amount = amount || transaction.amount;
    transaction.category = category || transaction.category;
    transaction.description = description || transaction.description;
    transaction.company = company || transaction.company;

    await transaction.save();
    res.status(200).json(transaction);
    if (io) {
        io.emit('transactionUpdated', transaction);
    }

});


const deleteTransaction = asyncHandler(async (req, res) => {

    const transaction = await trans.findByIdAndDelete(req.params.id);
    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({ message: 'Transaction deleted successfully' });
    if (io) {
        io.emit('transactionUpdated', transaction);
    }

});

module.exports = {
    addTransaction,
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    setSocketIO
};
