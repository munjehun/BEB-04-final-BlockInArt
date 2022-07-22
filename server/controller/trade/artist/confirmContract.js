const { Trade } = require("../../../models");

const mintNFT = require("../../../functions/mintNFT");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.findOne({
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
      });

      const trade_state = tradeInfo.dataValues.trade_state;

      console.log(trade_state);

      if(trade_state === 2){
        return res.status(200).send({
          message: "buyer has not confirmed"
        })
      }

      const owner_id = req.session.user_id;
      const buyer_id = trade_user_id;

      const mintData = await mintNFT(owner_id, buyer_id);

      Trade.update({trade_state : 4},{
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
      })

      res.status(200).send({
        message: "confirm contract success"
      })
    } catch (error) {
      console.log(error);
    }
  },
};
