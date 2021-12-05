
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('landing')

})

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.render('selection');
    //     return;
    // }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup')

})

router.get('/selection', (req, res) => {
    console.log("Selection in home")
    res.render('selection')
})

router.get('/comment', (req, res) => {
    res.render('comment')
})

router.get('/research', (req, res) => {
    res.render('research')
})

router.get('/books', (req, res) => {
    console.log("Books in home")
    res.render('books')
})

module.exports = router;