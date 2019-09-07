import React, { Fragment, useState } from 'react';
import { addMessage } from '../events/eventCreators';

interface Props {
  ws: WebSocket,
};

const MessageForm: React.FC<Props> = ({ ws }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onSubmit = (): void => ws.send(JSON.stringify(addMessage(username, message)));
  const onChange = (e: any): void => {
    if (e.target.id === 'username') setUsername(e.target.value);
    else setMessage(e.target.value);
  };
  return (
    <Fragment>
      <input id="username" type="text" placeholder="username" onChange={onChange} />
      <input id="message" type="text" placeholder="message" onChange={onChange} />
      <button id="post" onClick={onSubmit}>POST</button>
    </Fragment>
  );
};

export default MessageForm;
