// backend/utils/tokenUtils.js

const jwt = require('jsonwebtoken');

// Función de generación de token
exports.generateToken = (userId) => {
    return jwt.sign({ id: userId }, 'practica', { expiresIn: '1h' });
};

// Función de verificación de token
exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, 'practica');
    } catch (error) {
        return null;
    }
};
