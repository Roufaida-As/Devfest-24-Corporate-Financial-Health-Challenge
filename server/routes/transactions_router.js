const express = require('express');
const {
    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getTransactionById
} = require('./../controllers/transaction_controller');
const authMiddleware = require('../middlewares/auth_middleware');

const router = express.Router();

router.route('/')
    .post(authMiddleware, addTransaction)
    .get(authMiddleware, getTransactions);

router.route('/:id')
    .get(authMiddleware, getTransactionById)
    .put(authMiddleware, updateTransaction)
    .delete(authMiddleware, deleteTransaction);

module.exports = router;
