const express = require("express");  /** Importando o express */
// É necessário uma instância do express para iniciar o servidor
const app = express();  /** Iniciando o express */


// CRIANDO A ROTA
app.get('/', (req, res) => {
  return res.send("Home");
});

app.get('/blog', (req, res) => {
  return res.send("Blog");
});
//*************************** PARAMETROS ********************/
// rotas com parametros OBRIGATÓRIO
app.get('/ola/:nome', (req, res) => {
  //REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
  var nome = req.params.nome;
  return res.send("<h2>Olá "+nome+"</h2>");
});

// rotas com parametros NÃO OBRIGATÓRIO
app.get('/ola2/:nome/:funcao?', (req, res) => {
  var nome = req.params.nome;
  var funcao =  req.params.funcao;
  if(funcao){
    return res.send("<h2>Nome: "+nome+" : "+funcao+"</h2>");
  }else{
    return res.send("<h2>Olá "+nome+"</h2>");
  }
});

//*************************** QUERY PARAMETROS ********************/
app.get('/canal/youtube', (req, res) => {
  var canal = req.query["canal"];

  if(canal){
    return res.send("<h2>Canal: "+canal+"</h2>");
  }else{
    return res.send("<h4>Sem Query param</h4>");
  }
  // EXEMPLO: http://localhost:4000/canal/youtube?canal=developer
});

// INICIANDO O SERVIDOR
app.listen(4000, function(err){
  if(err){
    console.log("Ocorreu um erro!");
  }else{
    console.log("Servidor iniciado com sucesso!");
  }
});