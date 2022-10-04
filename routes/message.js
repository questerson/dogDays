const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message")

router.post("/:recName/:recId",  messageController.createMessage);


module.exports = router; 