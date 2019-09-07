import React, { useState, useEffect, Fragment } from 'react';
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';
import { getMessages } from '../events/eventCreators';

interface Props {};

const MessageContainer: React.FC<Props> = () => {
  const ws = new WebSocket('ws://localhost:3000');
  const [messages, setMessages] = useState([]);

  ws.onmessage = (event: any): void => setMessages(JSON.parse(event.data));

  // Get messages on initial load when WebSocket state is OPEN
  useEffect((): void => {
    ws.send(JSON.stringify(getMessages()));
  }, [ws.readyState]);

  return (
    <Fragment>
      <MessageForm ws={ws} />
      <MessageDisplay ws={ws} messages={messages} />
    </Fragment>
  );
};

export default MessageContainer;
