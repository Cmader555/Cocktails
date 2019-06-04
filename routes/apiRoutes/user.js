var router = require("express").Router();
var userController = require("../../controllers/user-controller");

// Matches with "/api/user"
router.route("/")
  .get(userController.find)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;