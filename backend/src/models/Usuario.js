// models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexión a la base de datos

// Definir el modelo de usuario
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
  // Otros atributos
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;   // Exportar el modelo
