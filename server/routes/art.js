var express = require("express");
var router = express.Router();

const { artController } = require("../controller");

// * POST api/art/insertArt
router.post("/insertArt", artController.insertArt.post);

// * GET api/art/artList
router.get("/artList", artController.artList.get);

// * GET api/art/artDetail
router.get("/artDetail", artController.artDetail.get);

module.exports = router;