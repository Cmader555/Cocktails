// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var Sequelize = require("sequelize");
var bcrypt = require("bcrypt");

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      isUnique :true
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        min: 4
      }
    },

    local_pw: {
      type: DataTypes.STRING,
      required: true,
      validate: {
          min:6
      }
    },
    profile: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fullName: DataTypes.STRING, 
    phoneNum: DataTypes.STRING, 
    city: DataTypes.STRING, 
    state: DataTypes.STRING, 
    country: DataTypes.STRING,
    birthday: DataTypes.STRING,  
   
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  // methods ======================
    // generating pw hash 
    User.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    };

    // validate pw
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local_pw);
    };

    // accociations ======================
    User.associate = function(models){
      User.belongsToMany(models.Cocktail, {
          through:  'favoriteDrink',
          foreignKey: "userUUID",
          as: "favorite",
          onDelete: 'cascade'
      });
  };

  return User;
};
