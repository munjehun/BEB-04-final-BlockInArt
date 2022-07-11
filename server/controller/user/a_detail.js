const { Art } = require("../../models");
const { Trade } = require("../../models");

module.exports = {
    get: async (req, res) => {
      try {
          const { id } = req.body;

          const artInfo = await Art.findOne({
              where: { id: id},
          });

          const tradeInfo = await Trade.findAll({
            where: { trade_art_id: id }
          })

          const { count, rows } = await Trade.findAndCountAll({
            where: { trade_art_id: id}
          });


          res.status(200).json({
            message: "get detail success",
            count: count,
            data: rows,
            artinfo: artInfo.dataValues,
          });
      } catch (error) {
          console.log(error)
      }
    }
  };
  