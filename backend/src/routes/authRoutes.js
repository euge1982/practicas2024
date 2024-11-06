// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/register', authController.register);   // Ruta para registrar usuario
router.post('/login', authController.login);   // Ruta para iniciar sesión

module.exports = router;
