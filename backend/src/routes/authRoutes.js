/*const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const match = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!match) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre }, 'secreto', { expiresIn: '1h' });
    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;*/

// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
