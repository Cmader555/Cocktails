var router = require("express").Router();
var cocktailController = require("../../controllers/cocktail-controller");

// Matches with "/api/cocktail"

// router.route("/api/cocktails")
//   .post(cocktailController.create)
//   .put(cocktailController.updateOne)
//   .get(cocktailController.findAll)

// router.route("/api/featuredDrinks").get(cocktailController.findFeatured)

router.post("/", cocktailController.create); 
router.put("/", cocktailController.updateOne); 
router.get("/", cocktailController.findAll); 

module.exports = router;