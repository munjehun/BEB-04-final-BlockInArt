var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * POST api/web3/jsonIPFS
router.post("/jsonIPFS", web3Controller.jsonIPFS.post);



module.exports = router;