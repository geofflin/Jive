import WebSocket from 'ws';
import express from 'express';
import path from 'path';
import wsEventListener from './webSockets/eventListeners';
import messageController from './controllers/messageController';

const PORT = 3000;
const app = express();
const wss = new WebSocket.Server({ 
  server: app.listen(PORT, () => console.log(`App is now listening on ${PORT}`))
});

// HTTP Protocol
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));
  app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html')));
}

// WebSocket Protocol
wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (event: string) => wsEventListener(event, wss, messageController));
});

wss.on('close', () => console.log('WebSocket Server has closed'));