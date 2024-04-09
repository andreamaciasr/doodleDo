var express = require('express');
var router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary')

router.get('/', function(req, res) {
  res.render('doodles/index', {title: 'feed', user: req.user});
});

router.get('/new', function(req, res) {
  res.render('doodles/new', {title: 'New Doodle'});
})

router.post('/new', upload.single('image'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(err, result) {
    if (err) {
      console.groupCollapsed(err);
    }

    res.status(200).json( {
      success: true,
      message: "Uploaded",
      data: result,
    })
  })
  res.send("image uploaded");
})



module.exports = router;
