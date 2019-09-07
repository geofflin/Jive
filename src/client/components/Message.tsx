import * as React from 'react';
import * as events from '../events/eventCreators';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  id: number,
  ws: WebSocket,
  msg: MessageModel,
};

const Message: React.FC<Props> = ({ id, ws, msg }) => {
  const { username, date, message } = msg;
  const deleteMessage = (): void => ws.send(JSON.stringify(events.deleteMessage(id)));
  return (
    <div>
      {`${username} (${date}): ${message}`}
      <button onClick={deleteMessage}>X</button>
    </div>
  );
};

export default Message;
