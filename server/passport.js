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
    LocalStrategy = require ('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
    
}));