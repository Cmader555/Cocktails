var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Cocktail = sequelize.define("Cocktail", {
        uuid: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          isUnique :true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            isUnique :true
        },
        ingredience: {
            type: DataTypes.STRING,
            required: true,
        },
        measurements: {
            type: DataTypes.STRING,
            required: true,
        },
        votes: DataTypes.STRING,
        category: DataTypes.STRING,
        alcohol: DataTypes.STRING,
        description: DataTypes.STRING,
        rating: DataTypes.STRING,
        month: DataTypes.STRING,
        img: DataTypes.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE  
    });

    // accociations ======================

    Cocktail.associate = function(models){
        Cocktail.belongsTo(models.User, {
            foreignKey: "userUUID",
            onDelete: 'cascade'
        });
    };

    Cocktail.associate = function(models){
        Cocktail.belongsToMany(models.User, {
            through:  'favoriteDrink',
            foreignKey: "drinkUUID",
            as: "user",
            onDelete: 'cascade'
        });
    };

    return Cocktail;
}