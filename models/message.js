const mongoose = require("mongoose");
//setting up the messaging schema
const MessageSchema = new mongoose.Schema({
    message: {
      type: Array,
      required: true,
       },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    senderName: {
        type: String,
        ref: "User"
      },
    receiverId: {
      type: String,
      require: true,
    },
    receiverName: {
        type: String,
        require: true,
      },
    // userIds: {
    //     type: String,
    //     require: false,
    //   },
  });
  //creating a model Post using the postSchema     
  //Moongoose will atomatically name the collection name the model's name with an "s" 
   
  module.exports = mongoose.model("Message", MessageSchema,);
  
  
  //mongoose custom name example
  //module.exports = mongoose.model("Post", PostSchema, 'customname');