const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { user_id, user_pass } = req.body;

      const userInfo = await User.findOne({
        where: { user_id: user_id },
      });

      if (!userInfo) {
        return res.status(401).json({ message: "존재하지 않는 아이디입니다" });
      }

      const result = await bcrypt.compare(user_pass, userInfo.user_pass);
      if (!result) {
        return res.status(401).json({ message: "비밀번호가 틀렸습니다" });
      }

      console.log(userInfo.dataValues.user_artistname);

      req.session.save(function () {
        req.session.user_id = userInfo.user_id;
        if (userInfo.dataValues.user_artistname != null) {
          req.session.user_artistname = userInfo.dataValues.user_artistname.toString();
        }
        console.log(req.session);
        res.json({ data: userInfo, message: "login success" });
      });
    } catch (error) {
      console.log(error);
    }
  },
};
