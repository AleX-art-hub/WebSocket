const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const allWss = expressWs.getWss('/');
app.use(express.json());

const message = [];

app.ws('/', function(ws,req){
    ws.send(JSON.stringify(messages));
    ws.on('message', function(msg){
    console.log(msg);
    messages.push(msg);
    allWss.clients.forEach(function(client){
        client.send(JSON.stringify([msg]));
    });
});
console.log('socket', req.testing);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
