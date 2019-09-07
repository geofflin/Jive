import * as React from 'react';

interface MessageModel {
  id: number,
  username: string,
  message: string,
  date?: Date,
};

interface Props {
  id: number,
  msg: MessageModel,
};

const Message: React.FC<Props> = ({ msg }) => {
  const { username, date, message } = msg;
  return (
    <div>
      {`${username} (${date}): ${message}`}
    </div>
  );
};

export default Message;
