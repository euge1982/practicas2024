/* backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.register = async (req, res) => {
    const { nombre, email, contraseña } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const usuario = await Usuario.create({
            nombre,
            email,
            contraseña: hashedPassword
        });
        res.status(201).json({ message: 'Usuario registrado correctamente', usuario });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario || !await bcrypt.compare(contraseña, usuario.contraseña)) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ id: usuario.id }, 'practica', { expiresIn: '1h' });
        res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};*/
const { generateToken } = require('../utils/tokenUtils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  Usuario  = require('../models/Usuario');

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

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUsuario = await Usuario.findOne({ where: { email } });

        if (!newUsuario ) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        const match = await bcrypt.compare(password, newUsuario.password);
        if (!match) {
            return res.status(401).json({ message: 'Password invalida' });
        }

        const token = generateToken(newUsuario.id);
        return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error al iniciar sesión',error);
        return res.status(500).json({ error: error.message });
    }
};
