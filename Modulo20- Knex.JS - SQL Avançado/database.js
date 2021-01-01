var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'andre',
    password: '0516',
    database: 'knexjs'
  }
});

module.exports = knex;