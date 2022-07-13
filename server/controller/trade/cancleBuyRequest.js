const { User } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
  post: async (req, res) => {
    if (!req.body.user_id) {
      return res.status(401).json({ message: "not authorized" });
    }
    try {
      const userId = req.body.user_id;
      const art_id = req.body.id;

      const userInfo = await User.findOne({
        where: { user_id: userId },
        attributes: ["id"],
      });

      const user_id = userInfo.dataValues.id.toString();

      const tradeInfo = await Trade.update(
        { trade_state: 0 },
        {
          where: { trade_art_id: art_id, trade_user_id: user_id },
        }
      );

      console.log(tradeInfo);
      res.status(200).send({message: "cancle success"});
    } catch (error) {
      console.log(error);
    }
  },
};
