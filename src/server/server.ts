import WebSocket from 'ws';
import express from 'express';
import path from 'path';
import messageController from './controllers/messageController';

const PORT = 3000;
const app = express();
const wss = new WebSocket.Server({ 
  server: app.listen(PORT, () => console.log(`App is now listening on ${PORT}`))
});

const {
  getMessages,
  addMessage,
  deleteMessage,
} = messageController;

// HTTP Protocol
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')));
}

// WebSocket Protocol
wss.on('connection', (ws: WebSocket) => {
  ws.on('message', async (event: string) => {
    const { method, payload } = JSON.parse(event);
    switch (method) {
      case 'POST':
        await addMessage(payload);
        break;
      case 'DELETE':
        await deleteMessage(payload);
        break;
      default:
    }
    await getMessages(wss);
  });
});

wss.on('close', () => console.log('WebSocket Server has closed'));