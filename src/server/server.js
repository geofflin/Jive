const WebSocket = require('ws');
const http = require('http');
const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messageRouter = require('./routers/messageRouter');

const app = express();
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')));
}

app.use('/messages', messageRouter);

// server.listen(3001, () => {
//   console.log(`Server started on port ${server.address().port}`);
// });


const wss = new WebSocket.Server({ 
  server: app.listen(PORT, () => console.log(`App is now listening on ${PORT}`))
});

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  ws.send('Hi there, I am a WebSocket server');
});