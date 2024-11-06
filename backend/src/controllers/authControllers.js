// backend/controllers/authController.js

const { generateToken } = require('../utils/tokenUtils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  Usuario  = require('../models/Usuario');

// Función de registro
exports.register = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const usuario = await Usuario.create({
            nombre,
            email,
            password: hashedPassword
        });
        res.status(201).json({ message: 'Usuario registrado correctamente', usuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Función de inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUsuario = await Usuario.findOne({ where: { email } });   // Busca el usuario

        // Si el usuario no existe
        if (!newUsuario ) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Si el usuario existe
        const match = await bcrypt.compare(password, newUsuario.password);

        // Si la contraseña es incorrecta
        if (!match) {
            return res.status(401).json({ message: 'Password invalida' });
        }

        // Si la contraseña es correcta
        const token = generateToken(newUsuario.id);
        return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error al iniciar sesión',error);
        return res.status(500).json({ error: error.message });
    }
};
