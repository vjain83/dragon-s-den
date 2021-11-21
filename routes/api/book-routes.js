const router = require('express').Router();
const { Book } = require('../../models/index')

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
    UPSERT.findOne({
        where: {
            id: req.params.id
        }
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
        publish: req.body.publish

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

})

//delet api/books/1 routes
router.delete('/:id', (req, res) => {

})

module.exports = router;

