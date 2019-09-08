import React from 'react';
import Message from './Message';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  messages: Array<MessageModel>,
  deleteMessage: Function,
}

const MessageDisplay: React.FC<Props> = ({ messages, deleteMessage }) => {
  const chatMessages = messages.map(msg => (
    <Message key={msg.id} id={msg.id} msg={msg} deleteMessage={deleteMessage}/>
  ));
  return (
    <ul>
      {chatMessages}
    </ul>
  );
};

export default MessageDisplay;
