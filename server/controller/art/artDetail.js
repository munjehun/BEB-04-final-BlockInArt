const { Art } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      console.log("⭐️⭐️⭐️⭐️⭐️ req.body :", req.body);

      const artInfo = await Art.findOne({
        where: { id: art_id },
      });

      res.status(200).send({
        message: "get art detail success",
        data: artInfo,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
