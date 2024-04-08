var express = require('express');
var router = express.Router();
const doodlesCtrl = require('../controllers/doodles');


// /* GET users listing. */
router.get('/', function(req, res) {
  res.render('doodles/index', {title: "feed", user: req.user});
});


module.exports = router;
