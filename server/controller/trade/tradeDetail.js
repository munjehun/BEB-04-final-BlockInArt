const { Trade } = require("../../models");
const { Art } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.findOne({
        include: { model: Art, where: { id: art_id } },
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
        attributes: ["trade_user_id","trade_state"],
      });

      const trade_state = tradeInfo.dataValues.trade_state.toString();

      const art_owner = tradeInfo.dataValues.Art.art_owner.toString();

      res.status(200).send({
        message: 'get tradeDetail success',
        trade_user_id: trade_user_id,
        trade_state: trade_state,
        art_owner: art_owner
      })
    } catch (error) {
      console.log(error);
    }
  },
};