import React, { Fragment } from 'react';

interface Props {
  handleClick: any,
  handleChange: any,
};

const MessageForm: React.FC<Props> = ({ handleClick, handleChange }) => {
  return (
    <Fragment>
      <input id="username" type="text" placeholder="username" onChange={handleChange} />
      <input id="message" type="text" placeholder="message" onChange={handleChange} />
      <button id="post" onClick={handleClick}>POST</button>
    </Fragment>
  );
};

export default MessageForm;
