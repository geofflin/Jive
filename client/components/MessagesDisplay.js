import React from 'react';
import Message from './Message.js';

const MessagesDisplay = (props) => {
  const messages = [];
  // Display the messages in reverse-order (most recent msg on the bottom)
  for (let i = 0; i < props.messages.length; i++) {
    messages.push(<Message msgObj={props.messages[props.messages.length - i - 1]} key={i} />);
  }
  return (
    <div id='msgDisplay'>
      {messages}
    </div>
  )
}

export default MessagesDisplay;