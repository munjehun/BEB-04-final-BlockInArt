var express = require("express");
var router = express.Router();

const { artController } = require("../controller");

// * POST api/art/insertArt
router.post("/insertArt", artController.insertArt.post);

module.exports = router;