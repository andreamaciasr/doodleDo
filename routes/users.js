const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');


// router.get(`/{user.id}`, function(req, res) {
//     res.render('users/show', {title: "user", user: req.user});
// })

// router.get('/users/:userId', function(req, res) {
//     res.render('users/show', { title: "user",  user: req.user });
// });

router.get('/users/:userId', usersController.getAll);




module.exports = router;
