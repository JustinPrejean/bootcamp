const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
// simplify logging instead of typing console.log each time
const log = console.log;

// used for logging routes, status codes, timimg, and data transfers
const logger = require("morgan");
app.use(logger("dev"));
// used for color coding console.logs
const chalk = require("chalk");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const db = "passport_Demo";
mongoose
  .connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(log(chalk.blue(`Connected to ${db}`)))
  .catch((error) => log(chalk.redBright(error)));

let User = require("./models/user");

const passport = require("passport");
const LocalStrategy = require("passport-local");
app.use(
  require("express-session")({
    secret: "Blah blah blah", // used to calculate the hash to protect our password
    resave: false,
    saveUninitialized: false,
  })
);

// starts a session
app.use(passport.initialize());
// allows access to
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// stores User object in session
passport.serializeUser(User.serializeUser());
// removes User object from session
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, (req, res) => {
  res.render("newsfeed.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", (req, res) => {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      log(chalk.red.inverse(err));
      return res.render("signup.ejs");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/newsfeed");
      });
    }
  });
});

app.get("/login", function (req, res) {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/newsfeed",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

app.get("/logout", function (req, res) {
  // When we logout, Passport destroys all user data in the session.
  req.logout();
  // redirect them to the home page
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  // isAuthenticated is a built in Passport method
  if (req.isAuthenticated()) {
    // next() tells it to move onto the next piece of code
    return next();
  }
  res.redirect("/login");
}

app.listen(port, () => {
  log(`App listening on port ${chalk.yellowBright.inverse(port)}`);
});
