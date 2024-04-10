var express = require('express');
var router = express.Router();
const doodlesCtrl = require('../controllers/doodles');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const ensureLoggedIn = require('../config/ensureLoggedIn');

