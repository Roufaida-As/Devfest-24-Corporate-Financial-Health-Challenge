const { Router } = require('express');
const { signup, verifyEmail, login } = require('./../controllers/user_controller.js');

const router = Router();

router.post('/signup', signup);
router.get('/verify-email/:token', verifyEmail);
router.post('/login', login);

module.exports = router