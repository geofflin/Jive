const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messageRouter = require('./routers/messageRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));
}
app.get('/index.css', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.css')));
app.use('/messages', messageRouter);

app.listen(PORT, () => console.log(`App is now listening on ${PORT}`));
