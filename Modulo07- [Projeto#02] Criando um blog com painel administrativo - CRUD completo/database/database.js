const Sequelize = require('sequelize');

// OBJETO DE CONEXÃO
const connection = new Sequelize('guiapress', 'andre', '0516', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;