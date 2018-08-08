/**
 * @file passport.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  2:46 AM
 *
 * @copright Azeem Mirza - 2018
 */

const passport = require('passport'),
    LocalStrategy = require ('passport-local').Strategy,
    User = require ('./models/user');

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username: username}, (err, user) => {
        if (err) {return done (err);}

        if(!user) { return done(null, false, { message : 'User not Found'}); }

        if(!user.password === password) { return done (null, false,{ message : 'Incorrect Password'}); }

        return done(null, user);
    });
}));

