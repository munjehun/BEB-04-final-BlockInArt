const { User } = require("../../models");

module.exports = {
    post: async (req, res, next) => {
        try {
            const user_id = req.body.user_id;

            console.log(user_id);

            const checkId = await User.findOne({
                where: {
                    user_id: user_id,
                },
            }); 

            if (checkId) {
                // status code 409
                res.status(409).json({ message: "이미 사용중인 아이디입니다." });
            } else{
                res.status(200).json({message: "ok"});
            }
        } catch (error) {
            console.log(error);
        }
    }
}