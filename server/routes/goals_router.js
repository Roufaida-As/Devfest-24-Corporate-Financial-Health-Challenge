const express = require('express');
const { createGoal, getGoals, updateGoal } = require('../controllers/goal_controller');
const isAuthenticated = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/create', isAuthenticated, createGoal);

router.get('/', isAuthenticated, getGoals);

router.put('/:id', isAuthenticated, updateGoal);

module.exports = router;
