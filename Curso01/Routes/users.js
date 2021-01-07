const express = require('express');
const router = express.Router();
const Users = require('../model/User');
const bcrypt = require('bcrypt');

/* NORMAL
router.get('/', (req, res) => {
  Users.find({}, (err, data) => {
    if(err) return res.send({ error: 'Erros ao consultar usuários'});
    return res.send(data);
  })
});*/
// ASYNC
router.get('/', async (req, res) => {
  try {
    const users = await Users.find({});
    return res.send(users);
  } catch (error) {
    return res.send({error: 'Erro ao consultar usuário'})
  }
})

/* criação de usuário
router.post('/create', (req, res) => {
  // parametros obrigatórios para inserção
  const { email, password } = req.body;
  // verifica se os parametros não estão nulos
  if(!email || !password) return res.send({ error: 'Dados insuficientes! '});

  // pesquisa o email
  Users.findOne({email}, (err, data) => {
    
    if(err) return res.send({ error: 'Dados insuficientes! '});
    // verifica se o email já existe no banco
    if(data) return res.send({ error: 'Usuário já resgistrado! '});

    // faz a inserção
    Users.create(req.body, (err, data) => {
      if(err) return res.send({ error: 'Erro ao criar usuário '});

      data.password = undefined;
      return res.send(data);

    });

  });

});
*/
// ASYNC
router.post('/create', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.send({ error: 'Dados insuficientes! '});

  try {
    if(await Users.findOne({ email })) return res.send({ error: 'Usuário já resgistrado! '});

    const user = await Users.create(req.body);
    user.password = undefined;
    return res.send(user);
  } catch (error) {
    if(err) return res.send({ error: 'Erro ao buscar usuário '});
  }
});

/* NORMAL
router.post('/auth', (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) return res.send({ error: 'Dados insuficientes! '});

  Users.findOne({email}, (err, data) => {
    if(err) return res.send({ error: 'Erro ao buscar usuário '});
    // se não existir o usuário
    if(!data) return res.send({ error: 'Usuário não registrado'});

    /**
     * Compara os dados
     * pega o password enviado passa para a função junto com a senha que está 
     * no banco e retorn a comparação no same
     *
    bcrypt.compare(password, data.password, (err, same) => {
      if(!same) return res.send({error: 'Erro ao autenticar usuário'});

      data.password = undefined;
      return res.send(data);
    })

  }).select('+password');
  
   * Obriga a enviar a senha, já que no Model de User, foi escrito
   * para que não fosse retornado o dados de password
   *
});*/

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) return res.send({ error: 'Dados insuficientes! '});

  try {
    const user = await Users.findOne({ email }).select('+password');
    if(!user) return res.send({ error: 'Usuário não registrado'});

    const pass_ok = await bcrypt.compare(password, user.password);
    
    if(!pass_ok) return res.send({error: 'Erro ao autenticar usuário'});

    user.password = undefined;
    return res.send(user);
    
  } catch (error) {
    if(err) return res.send({ error: 'Erro ao buscar usuário '});
  }
});


module.exports = router;
