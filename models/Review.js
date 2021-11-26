const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        reader_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'reader',
                key: 'id'
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'book',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'

    }
);

module.exports = Review;