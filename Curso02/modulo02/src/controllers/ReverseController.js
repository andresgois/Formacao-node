import Reverse from '../models/Reserve';
import User from '../models/User';
import House from '../models/Houser';


class ReserveController{

  async store(req, res){
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);
    if(!house){
      return res.status(400).json({ error: 'Essa casa não existe'});
    }

    if(house.status !== true){
      return res.status(400).json({ error: 'Solicitação indisponivel'});
    }

    const user = await User.findById(user_id);
    if(String(user._id) === String(house.user)){
      return res.status(401).json({ error: 'Reserva não permitida'});
    }

    const reserve = await Reverse.create({
      user: user_id,
      house: house_id,
      date,
    });

    await reserve.populate('house').populate('user').execPopulate();

    return res.json(reserve);

  }

  async index(req, res){
    const { user_id } = req.headers;

    const reserves = await Reverse.find({ user: user_id});
    if( reserves === false ){
      console.log("reserves")
    }
    
    return res.json(reserves);
  }
}


export default new ReserveController();