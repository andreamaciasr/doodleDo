var express = require('express');
var router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  path.join(__dirname, '/../uploaded-doodles'));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname)) // 1. error handling 2.filename
  }
})

const upload = multer({storage: storage})


router.get('/', function(req, res) {
  res.render('doodles/index', {title: 'feed', user: req.user});
});

router.get('/new', function(req, res) {
  res.render('doodles/new', {title: 'New Doodle'});
})

router.post('/new', upload.single('image'), function(req, res) {
  res.send("image uploaded")
})

module.exports = router;
