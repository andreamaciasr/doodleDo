const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/doodles/:doodleId/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:commentId', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;