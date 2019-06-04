const db = require("../models");

// Defining methods for the UserController
module.exports = {
  find: function(req, res) {
   var uuid = req.session.passport.user;
   db.User
    .findOne({where:{uuid: uuid}})
      .then(function(dbUser){
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
    // res.json(true)  
  },
  update: function(req, res) {
  
    var uuid = req.session.passport.user;
    db.User
      .update(req.body, {where:{uuid: uuid}})
      .then(function(updatedUser){
        console.log(updatedUser)
      })
  },
  delete: function(req, res) {
    console.log("delete")
   res.json(true) 
  }
};
