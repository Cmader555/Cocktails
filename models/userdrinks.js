module.exports = function (sequelize, DataTypes) {
    let Drinks = sequelize.define("Drinks", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ingredient1: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        ingr_measure1: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        ingredient2: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },

        ingr_measure2: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        ingredient3: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },

        ingr_measure3: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        ingredient4: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },

        ingr_measure4: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        ingredient5: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },

        ingr_measure5: {

            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });

    return Drinks
}

