import React from 'react';

const MessageForm = ({ postMessage }) => {
  return (
    <form>
      <input id='message' type='text'></input>
      <input 
        onClick = {
          e => {
            e.preventDefault(); // prevent submit from refreshing page
            if (message.value) postMessage(message.value);
            message.value = '';
          }
        } 
        type='submit' 
        value='Enter Message'>
      </input>
    </form>
  );
}

export default MessageForm;
