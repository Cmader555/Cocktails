const db = require("../models");
//to be handled in cocktail controller and done through api route 


module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/drinks", function (req, res) {

        db.Drinks.findAll({ include: db.Ingredients }).then(function (dbDrinks) {
            res.json(dbDrinks);
        });
    });




    app.post("/api/drinks", function (req, res) {
        console.log(req.body);

        db.Drinks.create({
            name: req.body.name
        }).then(dbDrink => {
            const ingredients = req.body.ingredients.map(ingredient => ({
                ...ingredient,
                DrinkId: dbDrink.id
            }));
            db.Ingredients.bulkCreate(ingredients);
        });
    });



}; 