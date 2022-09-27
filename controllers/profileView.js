const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Profile = require("../models/Profile");

module.exports = {

    getProfile: async (req, res) => {
        console.log(req)
        try {
            console.log(req)
          //find all the post for the user using the unique user id using the mongo find method Which uses the model that knows the collection name
          const posts = await Post.find({ user: req.user._id });
          //need to make a varible to hold the user info from req
          const profile = await Profile.find({user:req.user._id})
          //render that users profile page with all the found post and passing the requests userID
          console.log(profile)
          res.render("profileView.ejs", { posts: posts, profile: profile, user:req.user.id });
          //catch error and log the error if there is one
        } catch (err) {
          console.log(err);
        }
      },
  
};
