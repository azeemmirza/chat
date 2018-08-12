const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');
let app = express();

const
    cors = require('./bin/cors'),
    models = require ('./models/index'),
    port = require('./bin/port'),
    passport = require ('./bin/passport')(app),
    routes = require('./routes/index');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);

/*
app.use(express.static(path.join(__dirname, 'public')));
*/
app.use ((req, res, next)=>{
    console.log('Routed');
    res.set('X-Auth', '123');
    next();
});

// Routes
app.use(routes);



app.db = models;



module.exports = app;
