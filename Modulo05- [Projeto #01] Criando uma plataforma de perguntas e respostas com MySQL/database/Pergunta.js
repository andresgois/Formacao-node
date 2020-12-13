const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
  titulo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// quando existir a tabela, ele não força a criar outra
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;
