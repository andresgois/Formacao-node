const express = require('express');
const app = express();

// para enviar um json no body
app.use(express.json());

// MIDDLEWARE GLOBAL
app.use( (req, res, next) => {
  console.log(`URL Chamada: ${req.url}`);
  return next();
});

// MIDDLEWARE QUE VERIFICA SE FOI PASSADO ALGUM NOME NO BODY
function checkCurso(req, res, next){
  if(!req.body.nome){
    return res.status(400).json({erro: 'Nome do curso é obrigatório'})
  }
  return next();
}

// MIDDLEWARE QUE VERIFICA SE HÁ INDICE
function checkIndexCurso(req, res, next){
  const curso = cursos[req.params.id];
  if(!curso){
    return res.status(400).json({erro: 'usuário não existe'})
  }
  return next();
}

const cursos = ["NodeJS", "PHP", "JAVA"];

app.get('/', (req, res) => {
  res.send('Rodando')
})

//  queries param
app.get('/curso', (req, res) => {
  var nome = req.query.nome;
  res.json({msg: `A Linguagem ${nome}`});
})

// params
app.get('/curso/:id', checkIndexCurso, (req, res) => {
  const {id} = req.params;
  res.json({msg: `ID:  ${id}`});
})

// BUSCADO POR REGISTRO
app.get('/cursos/:id', checkIndexCurso,(req, res) => {
  const {id} = req.params;
  res.json(cursos[id]);
});

app.get('/cursos', (req, res) => {
  res.json(cursos);
});

app.post('/cursos', checkCurso, (req, res) => {
  const { nome } = req.body;
  cursos.push(nome);
  res.json({msg: 'Inserido com sucesso', cursos});
});

app.put('/cursos/:id', checkIndexCurso, (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  cursos[id] = nome;

  res.json({msg: 'Atualizado com sucesso', cursos});
});

app.delete('/cursos/:id',checkIndexCurso, (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  cursos.splice(id,1);

  res.json({msg: 'deletado com sucesso', cursos});
});

app.listen(3000, () => {
  console.log('Rodando');
})