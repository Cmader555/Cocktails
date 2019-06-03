module.exports = function (sequelize, DataTypes) {
    let Drinks = sequelize.define("Drinks", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

    });

    Drinks.associate = function (models) {

        Drinks.hasMany(models.Ingredients, {
            
        });
    };

    return Drinks
}

