import React, { useState, useEffect, Fragment } from 'react';
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';
import * as events from '../events/eventCreators';

interface Props {
  ws: WebSocket,
};

const MessageContainer: React.FC<Props> = ({ ws }) => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const handleClick = (): void => ws.send(JSON.stringify(events.addMessage(username, message)));
  const handleChange = (e: any): void => {
    if (e.target.id === 'username') setUsername(e.target.value);
    else setMessage(e.target.value);
  };
  const deleteMessage = (id: number): void => ws.send(JSON.stringify(events.deleteMessage(id)));

  ws.onmessage = (event: any): void => setMessages(JSON.parse(event.data));

  // Get messages on initial load when WebSocket state is OPEN
  useEffect((): void => {
    if (ws.readyState === 1) ws.send(JSON.stringify(events.getMessages()));
  }, [ws.readyState]);

  return (
    <Fragment>
      <MessageForm handleClick={handleClick} handleChange={handleChange} />
      <MessageDisplay messages={messages} deleteMessage={deleteMessage} />
    </Fragment>
  );
};

export default MessageContainer;
