var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var passport = require("passport")
const flash = require("connect-flash");

var indexRouter = require('./routes/index');

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pinterest")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

var app = express();

/* view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* session */
app.use(flash());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

/* passport */
app.use(passport.initialize());
app.use(passport.session());

/* middlewares */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* routes */
app.use('/', indexRouter);


/* error handlers */
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

module.exports = app;
