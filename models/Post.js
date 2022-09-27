const mongoose = require("mongoose");
//setting up the post schema 
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    //setting like to interger so that we can increment it later using the mongo methos $inc
    type: Number,
    required: true,
  },
  user: {
    //grabbing the user id using the User Schema Moongoose will atomatically name the collection name the models name with an s so "Posts"
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    //setting the data created will use this to display the time and date 
    type: Date,
    default: Date.now,
  },
  createdByName:{
    type: String,
    ref: "user"
  },
  userIdsLiked:{
    type: Array,
    required: false,
  },
});
//creating a model Post using the postSchema     
//Moongoose will atomatically name the collection name the models name with an "s" so "Posts"
 
module.exports = mongoose.model("Post", PostSchema,);


//mongoose custom name example
//module.exports = mongoose.model("Post", PostSchema, 'customname');

