const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','andre','0516', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;