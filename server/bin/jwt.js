/**
 * @file jwt.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  3:07 AM
 *
 * @copright Azeem Mirza - 2018
 */

const jwt = require ('jsonwebtoken'),
    key = 'SECRET';

module.exports.getToken = (data) => {

    try {
        return jwt.sign(data, key);
    } catch (e) {
        return e;
    }


};

module.exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, key);
    } catch (e) {
        return e;
    }
};