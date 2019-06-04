var router = require("express").Router();
var cocktailController = require("../../controllers/cocktail-controller");

// Matches with "/api/cocktail"

router.route("/")
  .get(cocktailController.find)
  .post(cocktailController.create)
  .put(cocktailController.update)
  .delete(cocktailController.delete);

// router.route("/:id")
//   .get(cocktailController.findOne)
//   .put(cocktailController.updateOne)
//   .delete(cocktailController.deleteOne);
    

module.exports = router;