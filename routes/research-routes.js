const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('research', { loggedIn: true });
});


module.exports = router;