// backend/config/database.js

const { Sequelize } = require('sequelize');

// Conexión a la base de datos
const sequelize = new Sequelize('galeria de arte', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
});

module.exports = sequelize;   // Exportar la instancia de Sequelize