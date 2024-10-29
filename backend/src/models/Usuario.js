// models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de configurar la conexión a tu base de datos

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_avatar: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  saldo: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;
