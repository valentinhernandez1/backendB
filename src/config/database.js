const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('UCUSPAM', 'postgres', 'andreina098', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,
});

module.exports = sequelize;