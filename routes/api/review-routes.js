
const router = require('express').Router();
const { Book, Reader, Review } = require('../../models')

// get all reviews
router.get('/', (req, res) => {
    Review.findAll().then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            re.status(500).json(err)
        })
});

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

router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbReviewData => {
            if (!dbReviewData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbReviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});




module.exports = router;