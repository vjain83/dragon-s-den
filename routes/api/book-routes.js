const router = require('express').Router();
const { Book, Review, Reader } = require('../../models')

//get api/books routes
router.get('/', (req, res) => {
    Book.findAll().then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            re.status(500).json(err)
        })

})

//get api/books/1 routes
router.get('/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Review,
                attributes: ['id', 'review_text', 'created_at'],
                include: {
                    model: Reader,
                    attributes: ['fullname']
                }

            }
        ]

    }).then(dbBookData => {
        if (!dbBookData) {
            res.status(404)({ message: 'No data Found' });
            return
        }
        res.json(dbBookData)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


//post api/books routes
router.post('/', (req, res) => {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
        edition: req.body.edition

    }).then(dbBookData => {
        console.log(dbBookData)
        res.json(dbBookData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//update api/books/1 routes
router.put('/:id', (req, res) => {
    Book.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbBookData => {
        if (!dbBookData[0]) {
            res.status(404).json({ message: 'No data found' })
            return
        }
        res.json(dbBookData);
    }).catch(err => {
        console.log(err);
        res.status(500).json
    })

})

//delet api/books/1 routes
router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
        res.json(dbBookData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

})

module.exports = router;

