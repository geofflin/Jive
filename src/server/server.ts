import * as WebSocket from 'ws';
import * as express from 'express';
import * as path from 'path';
import messageController from './controllers/messageController';
import { userEvent } from '../interfaces/interfaces';


const app = express();
const PORT = 3000;
const wss = new WebSocket.Server({ 
  server: app.listen(PORT, () => console.log(`App is now listening on ${PORT}`))
});

const {
  getMessages,
  addMessage,
  editMessage,
  deleteMessage,
} = messageController;

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')));
}

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (event: userEvent) => {
    console.log('received: %s', event);
    const { method, payload } = event;
    switch (method) {
      case 'GET':
        getMessages(ws);
        break;
      case 'POST':
        break;
      case 'DELETE':
        break;
      default:
    }
    // ws.send(`Hello, you sent -> ${event}`);
  });

  ws.send('Hi there, I am a WebSocket server');
});

wss.on('close', () => console.log('WebSocket Server has closed'));