import React, { Fragment } from 'react';
import { addMessage } from '../events/eventCreators';

interface Props {
  onSubmit: any,
  onChange: any,
};

const MessageForm: React.FC<Props> = ({ onSubmit, onChange }) => {
  return (
    <Fragment>
      <input id="username" type="text" placeholder="username" onChange={onChange} />
      <input id="message" type="text" placeholder="message" onChange={onChange} />
      <button id="post" onClick={onSubmit}>POST</button>
    </Fragment>
  );
};

export default MessageForm;
