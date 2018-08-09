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
    return jwt.sign(data, key, (err, token) => {
        if (err) return err;
        return token;
    });
};

module.exports.verifyToken = (token) => {
    return jwt.verify(token, key, (err, decoded) => {
        if(err) return err;
        return decoded;
    });
};