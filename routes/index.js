const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const selectionRoutes = require('./selection-routes')
const commentRoutes = require('./comment-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/selection', selectionRoutes)
router.use('/comment', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router