const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Post = sequelize.define('Post', {
  idPost: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tema: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  datePost: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_creator_id: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,   
      key: 'userId',   
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}, {
  tableName: 'Post',
  timestamps: false,
});

Post.belongsTo(Usuario, { foreignKey: 'user_creator_id' });

module.exports = Post;

