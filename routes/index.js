const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const selectionRoutes = require('./selection-routes')
const commentRoutes = require('./comment-routes');
const researchRoutes = require('./research-routes');
const booksRoutes = require('./books-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/selection', selectionRoutes)
router.use('/comment', commentRoutes)
router.use('/research', researchRoutes)
router.use('/books', booksRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router