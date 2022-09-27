const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/Profile");
const FriendFinder = require("../models/FriendFinder")
const Post = require("../models/Post");
const Comment = require("../models/Comment")
module.exports = {
 


  //request to render a page of all the users post aka the fee
  getFeed: async (req, res) => {
    try {
      //find all the post in the database buy all users sort them and place assign them to post varible.Using LEAN method taking only the parts we want
      const profile = await Profile.find().sort({ createdAt: "desc" }).lean();
      console.log(profile)
      //render the page passing the posts
      res.render("friendFinder.ejs", { profile: profile });
    } catch (err) {
      console.log(err);
    }
  },
 
};
