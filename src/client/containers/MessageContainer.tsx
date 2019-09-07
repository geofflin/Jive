import * as React from 'react';
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';
import { getMessages } from '../events/eventCreators';

interface Props {};

const MessageContainer: React.FC<Props> = () => {
  const ws = new WebSocket('ws://localhost:3000');
  const [messages, setMessages] = React.useState([]);

  ws.onmessage = (event: any): void => setMessages(JSON.parse(event.data));

  // Get messages on initial load when WebSocket state is OPEN
  React.useEffect((): void => {
    ws.send(JSON.stringify(getMessages()));
  }, [ws.readyState]);

  return (
    <React.Fragment>
      <MessageForm ws={ws} />
      <MessageDisplay messages={messages} />
    </React.Fragment>
  );
};

export default MessageContainer;
