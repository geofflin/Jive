const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const { getMessages, postMessage } = require('./messageController.js');

const app = express();
const port = 3000;
const http = require('http');

// const server = http.createServer(app);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));
}

app.get('/messages', getMessages);
app.post('/messages', postMessage);

app.listen(port, () => console.log(`App is now listening on ${port}`));