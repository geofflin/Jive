import * as WebSocketServer from 'ws';
import * as express from 'express';
import * as path from 'path';
import messageRouter from './routers/messageRouter';

const app = express();
const PORT = 3000;
const wss = new WebSocketServer.Server({ 
  server: app.listen(PORT, () => console.log(`App is now listening on ${PORT}`))
});

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')));
}

app.use('/messages', messageRouter);

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  ws.send('Hi there, I am a WebSocket server');
});

wss.on('close', () => console.log('WebSocket Server has closed'));