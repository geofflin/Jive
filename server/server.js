const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const { getMessages, postMessage, editMessage, deleteMessage } = require('./messageController.js');

const app = express();
const port = 3000;

// Socket.io implementation
// const http = require('http');
// const server = http.Server(app);
// const io = require('socket.io')(server);
// server.listen(port);

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   // socket.on('my other event', function (data) {
//   //   console.log(data);
//   // });
// });
// End Socket

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));
}

app.get('/index.css', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.css')));

app.get('/messages', getMessages);
app.post('/messages', postMessage);
app.patch('/messages/:messageId', editMessage);
app.delete('/messages/:messageId', deleteMessage);

app.listen(port, () => console.log(`App is now listening on ${port}`));