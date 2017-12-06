const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');


// require routes
const auth = require('./routes/auth');
const photo = require('./routes/photos');

const app = express();



// connect mongodb

mongoose.connect('mongodb://localhost/photography', {
  useMongoClient: true
});

// passport
passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect username' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect password' });
      return;
    }

    next(null, foundUser);
  });
}));

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }

    cb(null, userDocument);
  });
});

// session

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));


// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


// routes

app.use('/', auth);
app.use('/', photo);

// Error handler and 404
app.use(function (req, res, next) {
  res.status(404);
  res.json({ error: "not found" });
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.error('ERROR', req.method, req.path, err);

  // render the error page
  if (!res.headersSent)
    res.status(500);
  res.json({ error: 'unexpected' });
});

module.exports = app;
