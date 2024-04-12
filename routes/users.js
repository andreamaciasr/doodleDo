const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users/:userId', usersController.getAll);



module.exports = router;
