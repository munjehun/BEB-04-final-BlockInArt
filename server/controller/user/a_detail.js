const { Art } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
    get: async (req, res) => {

      if(!req.body.user_id){
        return res.status(401).json({ message: "not authorized" });
      }

      try {
          const { id } = req.body;

          const artInfo = await Art.findOne({
              where: { id: id},
          });

          const tradeInfo = await Trade.count({
            where:{ trade_art_id: id, trade_state: 2}
          })

          console.log(tradeInfo);

          if(tradeInfo === 1){
            const reservationInfo = await Trade.findOne({
              where:{ trade_art_id: id, trade_state: 2}
            })

            return res.status(200).json({
              message: "get trade reservation success",
              data: reservationInfo,
              artInfo : artInfo.dataValues,
            })
          }

          const { count, rows } = await Trade.findAndCountAll({
            
            where: { trade_art_id: id, trade_state: 1}
          });

          res.status(200).json({
            message: "get artist detail success",
            count: count,
            data: rows,
            artinfo: artInfo.dataValues,
          });
      } catch (error) {
          console.log(error)
      }
    }
  };
  