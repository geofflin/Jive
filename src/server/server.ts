import * as WebSocket from 'ws';
import * as express from 'express';
import * as path from 'path';
import messageController from './controllers/messageController';

const PORT = 3000;
const app = express();
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

// WebSocket Server: Pseudo 'Request' Handlers
wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (event: string) => {
    const { method, payload } = JSON.parse(event);
    switch (method) {
      case 'GET':
        getMessages(ws);
        break;
      case 'POST':
        addMessage(ws, payload);
        break;
      case 'DELETE':
        deleteMessage(payload);
        break;
      default:
    }
  });

  ws.send('Hi there, I am a WebSocket server');
});

wss.on('close', () => console.log('WebSocket Server has closed'));