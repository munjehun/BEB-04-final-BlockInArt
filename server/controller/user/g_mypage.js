const { User } = require("../../models");
const { Art } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const user_id = req.body.user_id;

      const userInfo = await User.findOne({
        where: { user_id: user_id},
        attributes: ['id'],
      })

      const userId = userInfo.dataValues.id.toString();

      const { count, rows } = await Trade.findAndCountAll({
        include: [
          {
            model: Art
          }
        ],
        where: {trade_user_id: userId},
      });
  
      res.status(200).json({
        message: "get general mypage success",
        count: count,
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
};