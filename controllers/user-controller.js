const db = require("../models");

// Defining methods for the UserController
module.exports = {
  find: function(req, res) {
    //user id SHOULD NEVER be sent on the front end
    //user id of the user making the requestis obtainable 
    //serverside with the following code
    //req.session.passport.user
    //this is only usable on routes where the user is logged in otherwise will get undefined
   var uuid = req.session.passport.user;
   db.User
    .findOne({where:{uuid: uuid}})
      .then(function(dbUser){
        //we don't send back the entire response fro the datebase when querying the user table
        //because we don't want to send back the user's id or password
        //so we create an object only send back the values that are not sensitive
        var user = {
          email: dbUser.dataValues.email,
          fullName: dbUser.dataValues.fullName,
          phoneNum: dbUser.dataValues.phoneNum,
          city: dbUser.dataValues.city,
          state:  dbUser.dataValues.state,
          country:  dbUser.dataValues.country,
          birthday:  dbUser.dataValues.birthday,
          profile:  dbUser.dataValues.profile,
          createdAt: dbUser.dataValues.createdAt,
          updatedAt:  dbUser.dataValues.updatedAt
        }

        res.render("dashboard", user)
      })
  },
  update: function(req, res) {
  
    var uuid = req.session.passport.user;
    db.User
      .update(req.body, {where:{uuid: uuid}})
      .then(function(updatedUser){
        if(updatedUser[0] !==0 || updatedUser.length >0){
          res.json(true)
        } else{
          res.json(false)
        }
      })
  },
  delete: function(req, res) {
    console.log("delete")
   res.json(true) 
  }
};
