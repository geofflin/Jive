import React from 'react';
import Message from './Message.js.js';

const MessagesDisplay = ({ messages, deleteMessage, editMessage }) => {
  const messagesToDisplay = [];
  // Display the messages in reverse-order (most recent msg on the bottom)
  for (let i = 0; i < messages.length; i++) {
    messagesToDisplay.push(
      <Message 
        msgObj={messages[messages.length - i - 1]}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
        key={i} 
      />
    );
  }
  return (
    <ul id='msgDisplay'>
      {messagesToDisplay}
    </ul>
  )
}

export default MessagesDisplay;