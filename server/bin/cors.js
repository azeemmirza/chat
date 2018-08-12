/**
 * @file cors.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  3:01 AM
 *
 * @copright Azeem Mirza - 2018
 */

module.exports = (req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Auth');
    res.append('Access-Control-Expose-Headers', 'X-Auth');
    res.append('Access-Control-Allow-Credentials', true);
    next();
}