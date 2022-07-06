var express = require("express");
var router = express.Router();

const { userController } = require("../controller");

// * POST api/users/login
router.post("/login", userController.login.post);

// * POST /users/logout
router.post("/logout", userController.logout.post);

// * get /users/mypage
router.get("/mypage", userController.mypage.get);

// * POST /users/join
router.post("/join", userController.join.post);


module.exports = router;