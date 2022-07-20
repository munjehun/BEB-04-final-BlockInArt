var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * POST api/web3/createNFT
router.post("/createNFT", web3Controller.createNFT.post);



module.exports = router;