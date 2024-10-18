const express = require('express');
const router = express.Router();
const { Home, signupUser, verifyOtp } = require('../controllers/authController');

router.get('/', Home);
router.post('/signup', signupUser);
router.post('/verify-otp', verifyOtp);

module.exports = router;
