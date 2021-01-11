const express = require('express');
const router = express.Router();
const auth = require('../middlewares/Auth');


router.get('/', auth, (req, res) => {
  console.log(res.locals.auth_data);
  
  return res.send({message: 'Você pode, mas usuários não autenticados não tem acesso!'})
});


module.exports = router;

/**
 *  200 - ok
 *  201 - created       - usuario criado
 *  202 - Accepted      - requisição ok porém ainda falta processamento
 * 
 *  400 - Bad request 
 *  401 - Unauthorizad  - Autenticação
 *  403 - Forbidden     - Autorização, tem caracter permanente
 *  404 - Not found
 * 
 *  500 - Internal server error
 *  501 - Not implemented - API não suporta a funcionalidade
 *  503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível
 */

