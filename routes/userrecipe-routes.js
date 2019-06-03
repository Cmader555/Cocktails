const db = require("../models");



module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/drinks", function (req, res) {

        db.Drinks.findAll({}).then(function (dbDrinks) {
            res.json(dbDrinks);
        });
    });




    app.post("/api/drinks", function (req, res) {
        db.Drinks.create(req.body).then(function (dbDrinks) {
            res.json(dbDrinks);
        });
    });





}; 