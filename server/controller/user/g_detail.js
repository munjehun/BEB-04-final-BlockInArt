const { User } = require("../../models");
const { Art } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const art_id = req.body.id;
      const user_id = req.body.user_id;

      const userInfo = await User.findOne({
        where: {user_id: user_id},
        attributes:  ['id']
      });

      const userId = userInfo.dataValues.id.toString();

      const artInfo = await Art.findOne({
          include: { model: Trade, where: {trade_user_id: userId}},
          where: {id: art_id}
      })

      res.status(200).send({
          message: 'get general detail success',
          data: artInfo,
      })


    } catch (error) {
      console.log(error);
    }
  }
};