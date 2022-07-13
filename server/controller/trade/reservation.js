const { User } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.art_id;
      const user_id = req.body.trade_user_id;

      const userInfo = await User.findOne({
        where:{user_id: user_id}
      })

      const trade_user_id = userInfo.dataValues.id;

      const tradeInfo = await Trade.update({trade_state: 2},{
        where:{trade_art_id: art_id, trade_user_id: trade_user_id}
      });

      console.log(tradeInfo);

      res.status(200).send('reservation success');

    } catch (error) {
      console.log(error)
    }
  }
}