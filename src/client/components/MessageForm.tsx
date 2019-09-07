import * as React from 'react';
import * as events from '../events/eventCreators';

interface Props {
  ws: WebSocket,
};

const MessageForm: React.FC<Props> = ({ ws }) => {
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');
  const addMessage = (): void => ws.send(JSON.stringify(events.addMessage(username, message)));
  const onChange = (e: any): void => {
    if (e.target.id === 'username') setUsername(e.target.value);
    else setMessage(e.target.value);
  };
  return (
    <React.Fragment>
      <input id="username" type="text" placeholder="username" onChange={onChange} />
      <input id="message" type="text" placeholder="message" onChange={onChange} />
      <button id="post" onClick={addMessage}>POST</button>
    </React.Fragment>
  );
};

export default MessageForm;
