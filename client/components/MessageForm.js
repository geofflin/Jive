import React from 'react';

const MessageForm = ({ postMessage }) => {
  return (
    <div>
    <form>
      <input id='username' type='text' placeholder='Username'></input>
      <input id='message' type='text' placeholder='Enter Message'></input>
      <input 
        onClick = {
          e => {
            e.preventDefault(); // prevent submit from refreshing page
            if (!username.value || !message.value) return window.alert('Type in a username and/or message!');
            postMessage(username.value, message.value);
            message.value = '';
          }
        } 
        type='submit' 
        value='>'>
      </input>
      
    </form>
    </div>
  );
}

export default MessageForm;
