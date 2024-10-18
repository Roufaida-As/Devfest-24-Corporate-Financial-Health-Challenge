const express = require('express')
const { getCashFlowData, getWeeklyIncomeExpense, getSpendingByCategory, getTransactionsWithCompanies } = require('../controllers/dashboard_controller.js');
const protect = require('./../middlewares/auth_middleware.js');
const router = express.Router();

router.get('/cash-flow', protect, getCashFlowData);
router.get('/weekly-data', protect, getWeeklyIncomeExpense);
router.get('/spending-category', protect, getSpendingByCategory);
router.get('/company-transactions', protect, getTransactionsWithCompanies);

module.exports = router;
