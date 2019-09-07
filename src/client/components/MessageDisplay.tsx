import * as React from 'react';
import Message from './Message';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  ws: WebSocket,
  messages: Array<MessageModel>,
}

const MessageDisplay: React.FC<Props> = ({ ws, messages }) => {
  const chatMessages = messages.map(msg => <Message key={msg.id} ws={ws} id={msg.id} msg={msg}/>);
  return (
    <div>
      {chatMessages}
    </div>
  );
};

export default MessageDisplay;
