
const Message = require("../models/Message")

module.exports = {
    createMessage: async (req, res) => {
        

    try {
        console.log(req)
      await Message.create({
        message: [req.user.userName, req.body.message],
        senderId: req.user.id,
        receiverId: req.params.recId,
        senderName: req.user.userName,
        receiverName: req.params.recName,
      });
      console.log("Comment has been added!");
      res.redirect("/feed/");

      
    } catch (err) {
      console.log(err);
      res.redirect("/feded/")
    }
  }
}
