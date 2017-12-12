const express = require('express');
const router = express.Router();
const Photos = require('../models/photo');
const mongoose = require('mongoose');
const upload = require("../configs/multer");
const ObjectId = mongoose.Schema.Types.ObjectId;



// upload images

router.post("/user/:id", (req, res, next) => {
  const id = req.params.id;
  
  const newPhoto = new Photos({
    owner: id,
    img: req.body.filename,
    description: req.body.description,
  });

  newPhoto.save(err => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({ message: "Photo added", id: newPhoto._id, });
  });
});

router.post("/upload", upload.single("file"), (req, res, next) => {
  res.json({ filename: `/uploads/${req.file.filename}` });
});




/* GET home page. */
router.get('/photos', (req, res, next) => {
  Photos.find({}, (err, photos) => {
    if (err) {
      return next(err)
    }
    res.json(photos);
  })
});


router.post('/user/:id', (req, res, next) => {
  const id = req.params.id;
  Photos.find({}, (err, photos) => {
    if (err) {
      return next(err)
    }
    res.json(photos);
  })
});

router.get('/photos/:id', (req, res, next) => {
  const idPhoto = req.param.id;

});








router.delete('/photos/:id', (req, res, next) => {

});

router.delete('/photos/:id/comments', (req, res, next) => {

});


module.exports = router;
