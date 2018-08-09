/**
 * @file port.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  9:05 PM
 *
 * @copright Azeem Mirza - 2018
 */

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val) => {
        let port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    },
    port = normalizePort(process.env.PORT || '3000');


