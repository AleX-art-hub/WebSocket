const {testHandler} = require('./eventsHandlers');
module.exports = function connectionHandler(socket){
    const handshake = socket.handshake;
    console.log('handshake:::');
    console.dir(handshake);

    socket.on('test', testHandler);
    socket.on('message', messageHandler);
};