const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    db = require ('./models/index');

const cors = require('./cors');

var indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors);

/*
app.use(express.static(path.join(__dirname, 'public')));
*/

//Socket

//Mongoose




app.use('/', (req, res) => {
    res.json({
        title : 'Chat API',
        url : 'http://localhost:3000/',
        host : 'localhost',
        port : '3000'
    });
});
app.db = db;

module.exports = app;
