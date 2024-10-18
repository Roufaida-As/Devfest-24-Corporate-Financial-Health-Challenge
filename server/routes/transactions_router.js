const express = require('express');
const {
    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getTransactionById
} = require('./../controllers/transaction_controller');

const authMiddleware = require('./../middlewares/auth_middleware.js');
const roleMiddleware = require('./../middlewares/role_middleware.js');

const router = express.Router();

router.route('/')
    .post(authMiddleware, roleMiddleware('admin'), addTransaction)
    .get(authMiddleware, getTransactions);

router.route('/:id')
    .get(authMiddleware, getTransactionById)
    .put(authMiddleware, roleMiddleware('admin'), updateTransaction)
    .delete(authMiddleware, roleMiddleware('admin'), deleteTransaction);

module.exports = router;
