const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

/* GET home page. */
router.get('/user/:id', function (req, res, next) {
    const id = req.params.id;
    User.findOne({ username: id }, (err, userData) => {
        if (err) {
            return next(err);
        }
        res.json(userData);
    })
});

router.post('/user/:id/edit', function (req, res, next) {
    const id = req.params.id;
    const {
        title,
        description,
        firstName,
        lastName,
        email

      } = req.body;
    User.findOneAndUpdate({ username: id }, { $set: { title: title, description: description, firstName: firstName, lastName: lastName, email: email } }, (err, userData) => {
        if (err) {
            return next(err);
        }
        res.json(userData);
    })
});


router.get('/user/:id/photos', function (req, res, next) {

});

router.get('/user/me', function (req, res, next) {

});



module.exports = router;
