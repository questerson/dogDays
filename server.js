const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
//method override is used to change the method of the form to put, forms are usually posts
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
//sets where are main route is stored
const mainRoutes = require("./routes/main");
//sets where our posts route is stored
const postRoutes = require("./routes/posts");
//sets where our comment route is stored
const commentRoutes = require("./routes/comment")
const friendRoutes = require("./routes/friendFinder")
const profileRoutes = require("./routes/profile")
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public')) //host the whole folder images ,css, jsmain whatever you want. 

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);
app.use("/friendRoutes", friendRoutes);
app.use("/profile", profileRoutes);

//Server Running
//listening for all the requests 

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});