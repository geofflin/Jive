import * as React from 'react';

const App = () => {
  const socket = new WebSocket('ws://localhost:3000');
  socket.onopen = () => {
    const request = { method: 'GET', payload: '' };
    socket.send(JSON.stringify(request));
  };
   
  // socket.onmessage = event => {
  //   console.log(`Message from server: ${event.data}`);
  //   console.log('event data', event)
  // };
  return (
    <div>
      <h2>REACT APP COMPONENT</h2>
    </div>
  )
};

export default App;