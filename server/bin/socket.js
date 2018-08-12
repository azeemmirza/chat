/**
 * @file socket.js
 * @project chat
 * @author azeem-mirza
 *
 * @date 8/9/2018
 * @time  3:12 AM
 *
 * @copright Azeem Mirza - 2018
 */

const socket = require('socket.io');

module.exports = (server) => {
    let io = socket(server);

    io.on('connection', (socket) => {
        console.log('Connected - ID: ' + socket.id);

        socket.on('message', (req) => {
            if(true){

            }
        });
        socket.on('disconnect', () => {
            console.log('Disconnected - ID:' + socket.id);
        });


    });


}