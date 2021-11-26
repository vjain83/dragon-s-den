const Book = require('./Book')
const Reader = require('./Reader')
const Review = require('./Review')


Reader.hasMany(Review, {
    foreignKey: 'reader_id'
});

Review.belongsTo(Reader, {
    foreignKey: 'reader_id'
});

Book.hasMany(Review, {
    foreignKey: 'book_id'
})

Review.belongsTo(Book, {
    foreignKey: 'book_id'
})

Reader.belongsToMany(Book, {
    through: Review,
    as: 'review_id',
    foreignKey: 'reader_id'

})

module.exports = { Book, Reader, Review };