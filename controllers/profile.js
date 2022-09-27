const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Profile = require("../models/Profile");

module.exports = {

  createProfile: async (req, res) => {
    console.log("hello")
    
    try {
        console.log(req.body)
        
      // Upload image to cloudinary and telling cloudinary exactly where to grab it store the results from cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      //add post information to the database using the Post Model 
      console.log(result)
    
      await Profile.create({
        //getting the title from the form request
        userAbout: req.body.userAbout,
        //using the cloudinary result url for image that was uploaded
        imageProfile: result.secure_url,
        //unique image id from cloudinary
        cloudinaryId: result.public_id,
        //users input for caption
        dogName: req.body.dogName,
        //like counter
        userActivities: req.body.userActivities,
        dogSize: req.body.dogSize,
        areaCode:req.body.areaCode,
        user: req.user.id,

      });
      console.log("Post has been added!");
      //redirect back to the profile after if the post was successful
      res.redirect("/profile");
    } catch (err) {
        console.log("createprofile error")
      console.log(err);
    }
  },
  
  getSetupProfile: async (req, res) => {
    try {
      //find all the post for the user using the unique user id using the mongo find method Which uses the model that knows the collection name
      const posts = await Post.find({ user: req.user.id });
      //need to make a varible to hold the user info from req
      const profile = await Profile.find({user:req.user.id})
      //render that users profile page with all the found post and passing the requests userID
      console.log(profile)
      res.render("profile.ejs", { posts: posts, profile: profile, user:req.user.id });
      //catch error and log the error if there is one
    } catch (err) {
      console.log(err);
    }
  },

  getProfile: async (req, res) => {
    
    try {
      reqInfo = req.params.id.split("&")
      console.log(reqInfo)
      userId = reqInfo[1]
      console.log(userId)
      //find all the post for the user using the unique user id using the mongo find method Which uses the model that knows the collection name
      const posts = await Post.find({ user: userId});
      //need to make a varible to hold the user info from req
      const profile = await Profile.find({user: userId})
      //render that users profile page with all the found post and passing the requests userID
      console.log(profile)
      console.log(posts)
      res.render("profileView.ejs", { posts: posts, profile: profile, user:req.user.id });
      //catch error and log the error if there is one
    } catch (err) {
      console.log(err);
    }
  },
};
