const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const connectionHandler = require
const app = express();
const server = http.Server(app);
const io = socketIO (server);

const router = require('./router');
const {connect} = require('./router');
app.use(router);
io.on('connection', connectionHandler);
/*
io.on('connection', function(socket){
  socket.on('test', (data, options) => {
    console.log('data:', data);
    console.log('options:', options);
  });
});*/
//const expressWs = require('express-ws')(app);
//const allWss = expressWs.getWss('/');
//app.use(express.json());

//сообщения
// const messages = [];

// app.ws('/', function (ws, req) {
//   //работаем с сообщениями
//   ws.send(JSON.stringify(messages));
//   ws.on('message', function (msg) {
//     console.log(msg);
//     // добавляем сообщение
//     messages.push(msg);
//     // оповещаем всех клиентов
//     allWss.clients.forEach(function (client) {
//       client.send(JSON.stringify([msg]));
//     });
//   });
//   console.log('socket', req.testing);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

