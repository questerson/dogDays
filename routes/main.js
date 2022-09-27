const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const friendFinderController = require("../controllers/friendFinder");
const profileViewController = require("../controllers/profileView");
const profileController = require("../controllers/profile");
//Main Routes - simplified for now



router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/friendFinder/", friendFinderController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/profileView", ensureAuth, profileViewController.getProfile);
router.get("/profileSetup", ensureAuth, profileController.getSetupProfile);

module.exports = router;
