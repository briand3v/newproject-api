const express = require('express');
const router = express.Router();
const Photos = require('../models/photo');
const mongoose = require('mongoose');
const upload = require("../configs/multer");
const ObjectId = mongoose.Schema.Types.ObjectId;



// upload images

router.post("/user/upload", (req, res, next) => {


  const newPhoto = new Photos({
    owner: req.user,
    img: req.body.filename,
    description: req.body.description,
    username: req.user.username,
  });

  newPhoto.save(err => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({ message: "Photo added", id: newPhoto._id, description: newPhoto.description, img: newPhoto.img, username: newPhoto.username });
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


router.get('/photos/owner', (req, res, next) => {

  Photos.find({ owner: req.user._id }, (err, photos) => {
    if (err) {
      return next(err)
    }
    res.json(photos);
  })

});

router.get('/photo/owner/:id/:photoId', (req, res, next) => {
  const username = req.params.id;
  const photo = req.params.photoId;
  Photos.findOne({ username: username, _id: photo }, (err, photo) => {
    if (err) {
      return next(err)
    }
    res.json(photo);
  })

});


router.delete('/photos/:id/comments', (req, res, next) => {

});


module.exports = router;
