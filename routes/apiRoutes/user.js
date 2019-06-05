var router = require("express").Router();
var userController = require("../../controllers/user-controller");

// Matches with "/api/user"

//there is no post method because post method is inside auth.js
router.route("/")
  .get(userController.find)
  .put(userController.update)
  .delete(userController.delete);

//if we need to query for all user info, corresponding to user creation methods 
// router.route("/all")
//   .get(userController.findAll)
//   .put(userController.updateAll)
//   .delete(userController.deleteAll);

module.exports = router;