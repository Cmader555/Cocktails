var router = require("express").Router();

var apiRoutes = require("./apiRoutes");
var htmlRoutes = require("./htmlRoutes/html-routes");

// api routes
router.use('/api', apiRoutes);

// html routes
router.use('/', htmlRoutes);

// catch all
router.use(function(req, res){res.render("404")});

module.exports = router;