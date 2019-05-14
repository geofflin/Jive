const express = require('express'); 
const path = require('path');
const app = express();
const port = 3000;

const http = require('http');

// const server = http.createServer(app);
// app.use(express.static(path.resolve(__dirname, '/client/public')));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(port, () => console.log(`App is now listening on ${port}`));