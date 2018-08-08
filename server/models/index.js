/**
 * @file index.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/8/2018
 * @time  10:56 PM
 *
 * @copright Azeem Mirza - 2018
 */

const mongoose = require('mongoose'),
    uri = 'mongodb://localhost:27017/chat',
    option = {useNewUrlParser: true};

mongoose.connect(uri, option)
    .then((res) => {
        console.log('Connection Established :');
        //console.log(res);
    })
    .catch((err) => {
        console.error('Error: ' + err);
    });

require('./user');

module.exports = mongoose;