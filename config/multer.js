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




// const path = require("path");
// const multer = require("multer"); // to upload img

// //Photo Storage 
// const photoStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, "../images"));
//     },
//     filename: function (req, file, cb) {
//         if (file) {
//             cb(null, new Date().toISOString().replace(/:/g, "-")
//                 + file.originalname);
//         } else {
//             cb(null, false);
//         }
//     }
// });
// // Photo Upload Middleware
// const photoUpload = multer({
//     storage: photoStorage,
//     fileFilter: function (req, file, cb) {
//         if (file.mimetype.startsWith("image")) {
//             cb(null, true);
//         } else {
//             cb({ message: "Unsupported file format" }, false);
//         }
//     },
//     limits: { fileSize: 1024 * 1024 }, // 1 megabyte
// });


// module.exports = photoUpload;