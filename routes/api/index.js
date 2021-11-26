const router = require('express').Router();
const bookRoutes = require('./book-routes')
const readerRoutes = require('./reader-routes')
const reviewRoutes = require('./review-routes')

router.use('/books', bookRoutes);
router.use('/readers', readerRoutes);
router.use('/reviews', reviewRoutes);





module.exports = router
