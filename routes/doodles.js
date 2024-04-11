const express = require('express');
const router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const doodle = require('../models/doodle');


router.get('/', doodlesCtrl.getFeed)

router.get('/new', doodlesCtrl.new);

router.post('/new', upload.single('image'), doodlesCtrl.create);

router.get('/:doodleId', doodlesCtrl.show);

router.put('/:doodleId', doodlesCtrl.addLike);


module.exports = router;
