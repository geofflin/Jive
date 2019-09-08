import React from 'react';
import * as events from '../events/eventCreators';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  id: number,
  msg: MessageModel,
  deleteMessage: Function,
};

const Message: React.FC<Props> = ({ id, msg, deleteMessage }) => {
  const { username, date, message } = msg;
  
  return (
    <li>
      {`${username} (${date}): ${message}`}
      <button onClick={(): void => deleteMessage(id)}>X</button>
    </li>
  );
};

export default Message;
