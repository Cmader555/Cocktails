const db = require("../models");

// Defining methods for the UserController
module.exports = {
  find: function(req, res) {
    //req.body should be an object with key and value that matches column header value
    //ie: {category: highball} 
    //find method in tis instamce any and all cocktails that meet criteria sent in the req.body
    db.Cocktail
    .find({
      where: req.body
    })
    .then(function(dbcocktails){
      console.log(dbcocktails)
    }) 
  },
  create: function(req, res) {
    console.log("update")
    res.json(true) 
  },
  update: function(req, res) {
    console.log("update")
    res.json(true) 
  },
  delete: function(req, res) {
    console.log("delete")
   res.json(true) 
  },
  findOne: function(req, res) {
    var id = req.params.id
    console.log("find")
    res.json(true)  
  },
  updateOne: function(req, res) {
    var id = req.params.id
    console.log("find")
    res.json(true)  
  },
  deleteOne: function(req, res) {
    var id = req.params.id
    console.log("find")
    res.json(true)  
  },
  findAll: function(req, res) {
    db.Cocktail
    .findAll()
    .then(function(dbcocktails){
      console.log(dbcocktails)
      //
      var results = {
        cocktails: []
      }
      dbcocktails.forEach(function(cocktail){
        var item = {
          name: cocktail.name,
          ingredience: cocktail.ingredience.split(", "),
          //measurement: "banana, apple, "
        }
        results.cocktails.push(item)
      })
      res.render("cocktails", results)
    })
  },
  updateAll: function(req, res) {
    console.log("find")
    res.json(true)  
  },
  deleteAll: function(req, res) {
    console.log("find")
    res.json(true)  
  }
};