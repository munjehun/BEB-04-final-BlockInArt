const { Trade } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.findOne({
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
        attributes: ["trade_state"],
      });

      const trade_state = tradeInfo.dataValues.trade_state.toString()

      res.status(200).send({
        message: 'get tradeDetail success',
        trade_state: trade_state
      })
    } catch (error) {
      console.log(error);
    }
  },
};