module.exports = function (sequelize, DataTypes) {

    let Ingredients = sequelize.define("Ingredients", {

        name: {
            type: DataTypes.STRING,
            AllowNull: false,
            validate: {
                len: [1]
            }

        },
        measurement: {

            type: DataTypes.STRING,
            AllowNull: false,
            validate: {
                len: [1]
            }

        }

    });
    Ingredients.associate = function (models) {

        Ingredients.belongsTo(models.Drinks, {

            foreignKey: {
                allowNull: false
            }
        })

    }
    return Ingredients

}