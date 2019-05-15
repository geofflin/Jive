import React from 'react';

const MessageForm = ({ getMessages, postMessage }) => {
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
            postMessage(message.value);
            getMessages();
            message.value = '';
          }
        } 
        type='submit' 
        value='>'>
      </input>
      
    </form>
    <input onClick={e => getMessages()} type='button' value='GetMessages'></input>
    </div>
  );
}

export default MessageForm;
