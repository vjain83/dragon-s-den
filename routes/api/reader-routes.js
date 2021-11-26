const router = require('express').Router();

const { Book, Reader, Review } = require('../../models');

// GET /api/readers
router.get('/', (req, res) => {
    // Access our Reader model and run .findAll() method)
    Reader.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbReaderData => res.json(dbReaderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Reader.create({
        fullname: req.body.fullname,
        bookclubaffiliation: req.body.bookclubaffiliation,
        username: req.body.username,
        password: req.body.password
    })
        .then(dbReaderData => res.json(dbReaderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// GET /api/readers/1
router.get('/:id', (req, res) => {
    Reader.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            // include the Review model here:
            {
                model: Review,
                attributes: ['id', 'Review_text', 'created_at'],
                include: {
                    model: Book,
                    attributes: ['title']
                }
            },
        ]

    })
        .then(dbReaderData => {
            if (!dbReaderData) {
                res.status(404).json({ message: 'No reader found with this id' });
                return;
            }
            res.json(dbReaderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//update reader data

router.put('/:id', (req, res) => {
    Reader.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }

    })
        .then(dbReaderData => {
            if (!dbReaderData[0]) {
                res.status(404).json({ message: 'No reader found with this id' });
                return;
            }
            res.json(dbReaderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// DELETE /api/readers/1
router.delete('/:id', (req, res) => {
    Reader.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbReaderData => {
            if (!dbReaderData) {
                res.status(404).json({ message: 'No Reader found with this id' });
                return;
            }
            res.json(dbReaderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.post('/login', (req, res) => {
    Reader.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbReaderData => {
        if (!dbReaderData) {
            res.status(400).json({ message: 'No reader with that username!' });
            return;
        }
        const validPassword = dbReaderData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        res.json({ reader: dbReaderData, message: 'You are logged in ' });
    })
})




module.exports = router;