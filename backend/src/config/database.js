// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('galeria de arte', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
});

module.exports = sequelize;
