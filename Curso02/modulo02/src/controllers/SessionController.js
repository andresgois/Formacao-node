

/**Métodos dentro do controller
 * index: Listagem de sessões 
 * store: Cria uma sessão 
 * show: Quando queremos listar uma única sessão
 * update: quando queremos atualizar uma sessão
 * destroy: quando queremos delete 
 */
import User from '../models/User';

 class SessionController{
   
    async store(req, res){
      const { email } =  req.body;
      // verifica se o email já existe
      let user = await User.findOne({email: email});

      if(!user){
        user = await User.create({email});
      }

      res.json(user);
    }

 }

 export default new SessionController();