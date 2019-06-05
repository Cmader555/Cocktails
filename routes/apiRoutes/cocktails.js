var router = require("express").Router();
var cocktailController = require("../../controllers/cocktail-controller");



router.post("/", cocktailController.create); 
router.put("/", cocktailController.updateOne); 
router.get("/", cocktailController.findAll); 

module.exports = router;