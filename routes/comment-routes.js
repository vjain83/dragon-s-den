const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Reader, Review } = require('../models')


// post review
router.post('/', (req, res) => {

    Review.create({
        review_text: req.body.review_text,
        book_id: req.body.book_id,
        reader_id: req.body.reader_id

    }).then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })


});



module.exports = router;