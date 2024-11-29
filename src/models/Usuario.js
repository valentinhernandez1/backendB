const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  auth0id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  nickname: DataTypes.STRING,
  email: DataTypes.STRING,
  imagen_url: DataTypes.STRING,
}, {
  tableName: 'Usuario',
  timestamps: false,
});

module.exports = Usuario;
