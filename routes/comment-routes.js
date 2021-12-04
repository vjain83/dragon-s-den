const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Reader, Review } = require('../models')


// router.get('/'(req, res) =>{
//     Book.findAll({}).then(dbBookData =>{
//         res.JSON(dbBookData)
//         console.log(dbBookData)
//     }).catch(err=>{
//         console.log(err)
//     })
// })
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            // use the ID from the session
            reader_id: req.session.reader_id
        },
        attributes: [
            'id',
            'review_text',
            'book_id',
            'created_at',
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_text', 'review_id', 'reader_id', 'created_at'],
                include: {
                    model: Reader,
                    attributes: ['username']
                }
            },
            {
                model: Reader,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            console.log(dbPostData)
            // serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('comment', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;