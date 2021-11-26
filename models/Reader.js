const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Reader extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
Reader.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookclubaffiliation: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
    },
    {

        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newReaderData) {
                newReaderData.password = await bcrypt.hash(newReaderData.password, 10);
                return newReaderData;
            },
            // set up beforeCreate lifecycle "hook" functionality
            async beforeUpdate(updateReaderData) {
                updateReaderData.password = await bcrypt.hash(updateReaderData.password, 10);
                return updateReaderData;
            },
        },

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'reader'
    }

)


module.exports = Reader;