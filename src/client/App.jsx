import React from 'react';

const App = () => {
  const url = 'ws://localhost:3000';
  const socket = new WebSocket(url);
  socket.addEventListener('open', () => {
    socket.send('Hello World!');
  });
   
  socket.addEventListener('message', event => {
    console.log(`Message from server: ${event.data}`);
  });
  return (
    <div>
      <h2>REACT APP COMPONENT</h2>
    </div>
  )
};

export default App;