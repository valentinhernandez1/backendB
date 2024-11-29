const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Post = require('./Post');

const Comentario = sequelize.define('Comentario', {
  commentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contenido: DataTypes.STRING,
  dateComment: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  imagen: DataTypes.STRING,
}, {
  tableName: 'Comentario',
  timestamps: false,
});

Comentario.belongsTo(Usuario, { foreignKey: 'user_creator_id' });
Comentario.belongsTo(Post, { foreignKey: 'id_post' });

module.exports = Comentario;
