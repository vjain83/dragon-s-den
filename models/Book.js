const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our books Model

class Book extends Model { }
Book.init(
    {        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        author: {
            type: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING
        },

        publish: {
            type: DataTypes.INTEGER
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }

);
module.exports = Book;
