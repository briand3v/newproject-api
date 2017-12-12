const multer = require("multer");
const path = require("path");

const options = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
  })
};

// const options = {
//   dest: "./public/uploads",
//   rename: function(fieldname, filename) {
//     return filename + Date.now();
//   },
//   onFileUploadStart: function(file) {
//     console.log(file.originalname + " is starting ...");
//   },
//   onFileUploadComplete: function(file) {
//     console.log(file.fieldname + " uploaded to  " + file.path);
//   }
// };

const upload = multer(options);
module.exports = upload;