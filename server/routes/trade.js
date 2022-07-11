var express = require("express");
var router = express.Router();

const { tradeController } = require("../controller");

// * POST api/trade/buyRequest
router.post("/buyRequest", tradeController.buyRequest.post);

module.exports = router;