const db = require("../models");

// Defining methods for the UserController
module.exports = {
  find: function(req, res) {
    console.log("find")
    res.json(true)  
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
  }
};