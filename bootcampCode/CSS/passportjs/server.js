const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/passport_Demo", {
  useNewUrlParser: true,
});
let User = require("./models/user");

const passport = require("passport");

const LocalStrategy = require("passport-local");

const passportLocalMongoose = require("passport-local-mongoose");

app.use(
  require("express-session")({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/newsfeed", (req, res) => {
  res.render("newsfeed.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", (req, res) => {
  let newUser = new User({
    username: req.body.username})
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.render('signup.ejs')
        } else {
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/newsfeed")
            })
        }
    })
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
