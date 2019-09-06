"use strict";
exports.__esModule = true;
var WebSocket = require("ws");
var express = require("express");
var path = require("path");
var messageRouter_1 = require("./routers/messageRouter");
var app = express();
var PORT = 3000;
var wss = new WebSocket.Server({
    server: app.listen(PORT, function () { return console.log("App is now listening on " + PORT); })
});
if (process.env.NODE_ENV === 'production') {
    app.use('/dist', express.static(path.join(__dirname, '../../dist')));
    app.get('/', function (req, res) { return res.sendFile(path.resolve(__dirname, '../../public/index.html')); });
}
app.use('/messages', messageRouter_1["default"]);
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message);
        ws.send("Hello, you sent -> " + message);
    });
    ws.send('Hi there, I am a WebSocket server');
});
wss.on('close', function () { return console.log('WebSocket Server has closed'); });
