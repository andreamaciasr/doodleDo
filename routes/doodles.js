const express = require('express');
const router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const upload = require('../config/multer');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, doodlesCtrl.getFeed)

router.get('/new', doodlesCtrl.new);

router.post('/new', upload.single('image'), doodlesCtrl.create);

router.get('/:doodleId', doodlesCtrl.show);

router.put('/:doodleId', doodlesCtrl.addLike);



module.exports = router;
