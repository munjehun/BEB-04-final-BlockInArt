const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const {user_id, user_pass} = req.body;

      const userInfo = await User.findOne({
        where: {user_id: user_id},
      });

      if(!userInfo){
        return res.status(401).json({message: "존재하지 않는 아이디입니다" });
      }

      const result = await bcrypt.compare(user_pass, userInfo.user_pass);
      if(!result){
        return res.status(401).json({ message: "비밀번호가 틀렸습니다" });
      }

      req.session.save(function(){
        req.session.user_id = userInfo.user_id;
        res.json({data: req.session.user_id, message: "login success" });
      })
    } catch (error) {
      console.log(error)
    }
  },
};
