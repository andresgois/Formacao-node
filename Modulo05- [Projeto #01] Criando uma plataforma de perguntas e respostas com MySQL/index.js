const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// DATABASE
/**
 * VERIFICAÇÃO DE CONEÇÃO COM O BANCO
 */
connection
          .authenticate()
          .then(() => {
            console.log('Conexão feita com banco de dados');
          })
          .catch((msgErro) => {
            console.log(msgErro);
          })

/**
 * DEFINE COMO MOTOR DE MONTAGEM DE PÁGINAS É O EJS
 * DEFINE UMA PASTA PARA USAR ARQUIVOS ESTÁTICOS A PARTIR DELA
 */
app.set('view engine','ejs');
app.use(express.static('public'));

/**
 * DECODIFICA OS DADOS PASSADOS PELO USUÁRIO NA URL
 * PERMITE LER DADOS DE FORMULÁRIO VIA JSON
 */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

/**
 * ROTA HOME
 * ORDERNA PARA DESCRESCENTE
 * TUDO OK: REDIRECIONA PARA A PÁGINA "INDEX" PASSANDO UM OBJETO PERGUNTAS PARA SER USADO LÁ
 */
app.get('/', (req, res) => {
  Pergunta.findAll({ raw: true, order:[
     ['id','DESC']
  ] }).then(perguntas => {
    //console.log(perguntas);
    res.render('index',{
      perguntas: perguntas
    });
  });
  
});

/**
 * EXIBE A PÁGINA DE PERGUNTAS
 */
app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

/**
 * DIRECIONA PARA A PÁGINA DE ACORDO COM A PERGUNTA SELECIONADO
 * EXIBE DE AORDO COM O ID
 * SE EXISTIR RESPOSTA
 * EXIBIR AS RESPOSTA DESSA PERGUNTA, SE EXISTIR
 */
app.get('/pergunta/:id', (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id }
  }).then(pergunta => {
    if(pergunta != undefined){

      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [['id', 'DESC']]
      }).then( respostas => {
        res.render("pergunta",{
          pergunta: pergunta,
          respostas: respostas
        });
      });
    }else{
      res.redirect('/');
    }
  });
});

/**
 * SALVA NOVA PERGUNTA NO BANCO
 */
app.post('/salvarperguntar', (req, res) => {
  var titulo = req.body.titulo;
  var desc = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: desc
  }).then(() => {
    res.redirect("/");
  });
});

/**
 * RESPONDE A PERGUNTA E REDIRECIONA PARA A PRÓPRIA PÁGINA
 * MOSTRANDO AS RESPOSTAS SE EXISTIREM
 */
app.post('/responder', (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  }).catch((msgErro) => {
    console.log(msgErro);
  });
});


app.listen(5000, () => {
  console.log("App rodando!");
})