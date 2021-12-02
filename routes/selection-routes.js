const router = require('express').Router();

// router.get('/selection', (req, res) => {
//     console.log("Recieved request for getting selection")
//     if (req.session.loggedIn) {
//         res.render('selection');
//         return;
//     }
//     res.status(403).json({ message: "User not logged in " })
// });

module.exports = router;