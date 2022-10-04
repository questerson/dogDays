const express = require("express");
const router = express.Router();
const friendFinder = require("../controllers/friendFinder");



router.get("/friendFinder/", friendFinder.getFeed);



module.exports = router;