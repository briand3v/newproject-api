const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');


/* GET home page. */
router.get('/photo', (req, res, next) => {
  Photo.find({}, (err, photos) => {
    if (err) {
      return next(err)
    }
    res.json(photos);
  })
});
router.post('/photo', (req, res, next) => {

});

router.get('/photo/:id', (req, res, next) => {
  const idPhoto = req.param.id;

});

router.delete('/photo/:id', (req, res, next) => {

});

router.delete('/photo/:id/comments', (req, res, next) => {

});


module.exports = router;
