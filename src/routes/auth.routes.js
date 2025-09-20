const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// registrar usuario
router.post('/register', authController.register);

// login usuario
router.post('/login', authController.login);

module.exports = router;
