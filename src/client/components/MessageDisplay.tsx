import * as React from 'react';
import Message from './Message';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  messages: Array<MessageModel>,
}

const MessageDisplay: React.FC<Props> = ({ messages }) => {
  const chatMessages = messages.map(msg => <Message key={msg.id} id={msg.id} msg={msg}/>);
  return (
    <div>
      {chatMessages}
    </div>
  );
};

export default MessageDisplay;
