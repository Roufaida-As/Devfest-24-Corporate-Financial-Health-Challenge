const express = require('express');
const generateReport = require('../controllers/reporting_controller');
const authMiddleware = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/generate', authMiddleware, generateReport);

module.exports = router;
