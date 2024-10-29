// backend/utils/tokenUtils.js
const jwt = require('jsonwebtoken');

exports.generateToken = (userId) => {
    return jwt.sign({ id: userId }, 'practica', { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, 'practica');
    } catch (error) {
        return null;
    }
};
