import * as React from 'react';
import MessageForm from '../components/MessageForm';

interface Props {};

const MessageContainer: React.FC<Props> = () => {
  const ws = new WebSocket('ws://localhost:3000');
  const [messages, setMessages] = React.useState([]);

  // GET 
  // socket.onopen = () => {
  //   const request = { method: 'GET', payload: '' };
  //   socket.send(JSON.stringify(request));
  // };
   
  // POST
  // socket.onopen = () => {
  //   const request = { method: 'POST', payload: { username: 'geoff', message: 'hey there' } };
  //   socket.send(JSON.stringify(request));
  // };

  // DELETE
  // socket.onopen = () => {
  //   const request = { method: 'DELETE', payload: 3 };
  //   socket.send(JSON.stringify(request));
  // };

  // socket.onmessage = event => {
  //   console.log(`Message from server: ${event.data}`);
  //   console.log('event data', event)
  // };
  return (
    <div>
      <p>MessageContainer</p>
      <MessageForm ws={ws} setMessages={setMessages} />
    </div>
  );
};

export default MessageContainer;
