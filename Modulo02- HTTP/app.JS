//** USANDO MODULO HTTP */
var http = require('http');


//* CRIA SERVIDOR HTTP
http.createServer( (req, res) => {

  res.end("Bem vindo");

}).listen(8181);
console.log("Servidor rodando");
