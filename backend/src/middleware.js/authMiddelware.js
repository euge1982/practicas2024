// backend/middleware/authMiddleware.js

const { verifyToken } = require('../utils/tokenUtils');

// Middleware de autenticación
module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    // Si no hay token
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado' });
    }
    try {
        // Verificar el token
        const decoded = verifyToken(token);

        // Si el token no es válido
        if (!decoded) throw new Error('Token no válido');

        // Si el token es válido
        req.userId = decoded.id;
        next();   // Continuar
    } catch (error) {
        res.status(403).json({ message: 'Token no válido' });
    }
};
