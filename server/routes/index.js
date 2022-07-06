/* '/api'로 시작하는 url 관리 router 파일 */

const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const artRouter = require("./art");
const tradeRouter = require("./trade");

// * request URL : /api/users
router.use("/user", userRouter);
// // * request URL : /api/board
// router.use("/art", artRouter);
// // * request URL : /api/web3
// router.use("/trade", tradeRouter);

module.exports = router;