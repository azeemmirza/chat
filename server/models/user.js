/**
 * @file user.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  2:49 AM
 *
 * @copright Azeem Mirza - 2018
 */

const mongoose = require ('mongoose'),
    Schema = mongoose.Schema({
        name: String,
        username : String,
        password : String,
        status : Boolean
    });

module.exports = mongoose.model('User', Schema);