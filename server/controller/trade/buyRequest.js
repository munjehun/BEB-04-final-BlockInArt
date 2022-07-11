const { User } = require("../../models");
const { Trade } = require("../../models");
module.exports = {
    post: async (req, res) => {
      try {
        const userId = req.body.user_id
        const art_id = req.body.id

        const userInfo = await User.findOne({
          where: {user_id: userId},
          attributes:  ['id']
        });

        const user_id = userInfo.dataValues.id.toString();

        Trade.create({
          trade_art_id: art_id,
          trade_user_id: user_id,
          trade_state: 1, // 구매 요청 상태
        })

        res.status(200).send({
          message: 'request success'
        })
      } catch (error) {
        console.log(error);        
      }
    }
  };
  