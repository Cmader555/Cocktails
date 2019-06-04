// Requiring path to so we can use relative routes to our HTML files
var router   = require("express").Router();
var cocktailController =  require("../../controllers/cocktail-controller")
var userController =  require("../../controllers/user-controller")

router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  var auth = req.isAuthenticated();
  if(auth) {
    userController.find(req, res)
  } else {
    res.render("home");
  }
});

router.get("/signup", function(req, res) {
  var auth = req.isAuthenticated();
  if(auth) return res.redirect("/");
  res.render("signup");
});

router.get("/login", function(req, res) {
  var auth = req.isAuthenticated();
  if(auth) return res.redirect("/");
  res.render("signup");
});

router.get("/dashboard", function(req, res) {
  // var auth = req.isAuthenticated();
  // if(!auth) return res.redirect("/");
  // userController.find(req, res)
  res.render("dashboard")
});

router.get("/cocktails", function(req, res) {
  cocktailController.findAll(req, res) 
});


module.exports = router;
