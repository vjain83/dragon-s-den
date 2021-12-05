const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Reader, Review } = require('../models')

router.get('/books', (req, res) => {
    console.log("Called books-routes.js get")
    Book.findAll({
        attributes: [
            'id',
            'title',
            'author',
            'isbn'
        ]
    }).then(dbBookData => {
        console.log("Book data recieved ", dbBookData)
        // serialize data before passing to template
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('books', { books, loggedIn: true });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;