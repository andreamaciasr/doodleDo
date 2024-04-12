const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users/:userId', usersController.getAll);
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('doodles/index'); 
    });
});


module.exports = router;
