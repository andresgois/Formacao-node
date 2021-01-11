import House from '../models/Houser';


class DashboardController{

  async show(req, res){
    const { user_id } = req.headers;

    const houses = await House.find({ user: user_id })

     res.json(houses);
  }

}


export default new DashboardController();