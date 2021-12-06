const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Reader, Review } = require('../models')

router.get('/', (req, res) => {
    Book.findAll({
        attributes: [
            'id',
            'title',
            'author',
            'isbn'
        ]
    }).then(dbBookData => {
        // serialize data before passing to template
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('books', { books, loggedIn: true, selectedId: 1 });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;