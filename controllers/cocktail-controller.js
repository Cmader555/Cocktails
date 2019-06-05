const db = require("../models");

// Defining methods for the UserController
module.exports = {

  create: function (req, res) {
    console.log("FUNCTION IS AT LEAST EXECuted")
    console.log("+++++++++++++++++")
    db.Drinks.create({
      name: req.body.name, 
      votes: req.body.votes, 
      imageURL: req.body.imageURL, 
      description: req.body.description

    }).then(dbDrink => {
      const ingredients = req.body.ingredients.map(ingredient => ({
        ...ingredient,
        DrinkId: dbDrink.id
      }));
      db.Ingredients.bulkCreate(ingredients);
    });
  },
  updateOne: function (req, res) {

    db.Drinks.update({ votes: db.sequelize.literal('votes + 1') }, { where: { id: req.body.id } });


  },
  findAll: function (req, res) {

    db.Drinks.findAll({ include: db.Ingredients }).then(function (dbDrinks) {
      res.json(dbDrinks);
    });

  },
  findFeatured: function (req, res) {

    db.Drinks.findAll({
      order: [["votes", 'DESC']],
      include: [db.Ingredients]
    }
    ).then(function (dbFeatured) {
      res.json(dbFeatured);
    })

  }
};