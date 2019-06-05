require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var passport = require("passport");
var session = require('express-session'); 
var flash = require('connect-flash');

var app = express();
var PORT = process.env.PORT || 3000;

var routes = require("./routes");
var db     = require("./models");

var syncOptions = { force: false };

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./config/passport')(passport); // pass passport for configuration

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// // Routes
// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);
// require("./routes/userrecipe-routes")(app); 

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.use(session({
  key: 'user_sid',
  secret: 'randomstringofcharsherefgkjhvbnb',
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 800000,
      httpOnly: false
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use(routes);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});









module.exports = app;
