// backend/middleware/authMiddleware.js
/*const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado' });
    }
    try {
        const decoded = jwt.verify(token, 'practica');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token no válido' });
    }
};*/

const { verifyToken } = require('../utils/tokenUtils');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado' });
    }
    try {
        const decoded = verifyToken(token);
        if (!decoded) throw new Error('Token no válido');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token no válido' });
    }
};
