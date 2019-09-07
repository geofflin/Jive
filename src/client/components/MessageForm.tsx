import * as React from 'react';

interface Props {
  ws: WebSocket,
  setMessages: Function,
};

const MessageForm: React.FC<Props> = ({
  ws,
  setMessages,
}) => {
  return (
    <React.Fragment>
      <input id="username" type="text" placeholder="username" />
      <input id="message" type="text" placeholder="message" />
      <button id="post">POST</button>
    </React.Fragment>
  );
};

export default MessageForm;
