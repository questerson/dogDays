const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const friendFinderController = require("../controllers/friendFinder");
const profileViewController = require("../controllers/profileView");



router.get("/profileView/:id", ensureAuth, profileViewController.getProfile);


module.exports = router;
