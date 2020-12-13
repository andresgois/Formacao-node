const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', {
  corpo:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// quando existir a tabela, ele não força a criar outra
Resposta.sync({force: false}).then(() => {});

module.exports = Resposta;
