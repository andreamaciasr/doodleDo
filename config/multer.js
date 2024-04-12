const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  path.join(__dirname, '/../uploaded-doodles'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // 1. error handling 2.filename
  }
})

const upload = multer({storage: storage});

module.exports = upload;



