const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');

var indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Socket

//Mongoose

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true});

//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
