const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Reader, Review } = require('../models')


router.get('/', (req, res) => {
    Book.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
    }).then(dbBookData => {
        // serialize data before passing to template
        const books = dbBookData.map(book => book.get({ plain: true }));
        console.log(books)
        res.render('research', { books, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

module.exports = router;