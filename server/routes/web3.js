var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * POST api/web3/createNFT
router.post("/createNFT", web3Controller.createNFT.post);

// * POST api/web3/createNFT
router.get("/getMyNFT", web3Controller.getMyNFT.get);



module.exports = router;