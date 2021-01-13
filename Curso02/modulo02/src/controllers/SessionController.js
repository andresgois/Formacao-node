/** Métodos dentro do controller
 * index: Listagem de sessões
 * store: Cria uma sessão
 * show: Quando queremos listar uma única sessão
 * update: quando queremos atualizar uma sessão
 * destroy: quando queremos delete
 */
import * as Yup from "yup";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação." });
    }

    // verifica se o email já existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    res.json(user);
  }
}

export default new SessionController();
