var router = require("express").Router();

var cocktailRoutes = require("./cocktails");
var userRoutes = require("./user");
var authRoutes = require("./auth");


// ../api/...
router.use("/cocktail", cocktailRoutes);
router.use("/user", userRoutes);
router.use("/", authRoutes);


module.exports = router;
