const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Post = require('./Post');
const Comentario = require('./Comentario');

const Puntuacion = sequelize.define('Puntuacion', {
  puntuacionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  valor: DataTypes.INTEGER,
}, {
  tableName: 'Puntuacion',
  timestamps: false,
});

Puntuacion.belongsTo(Usuario, { foreignKey: 'user_id' });
Puntuacion.belongsTo(Post, { foreignKey: 'post_id' });
Puntuacion.belongsTo(Comentario, { foreignKey: 'comentario_id' });

module.exports = Puntuacion;
