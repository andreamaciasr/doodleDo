var express = require('express');
var router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', doodlesCtrl.getFeed)

router.get('/new', doodlesCtrl.new);

router.post('/new', upload.single('image'), doodlesCtrl.create);


// router.get("/:id", ensureLoggedIn, doodlesCtrl.show)

module.exports = router;
