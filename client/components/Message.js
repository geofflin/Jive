import React from 'react';

const Message = ({ msgObj, deleteMessage, editMessage }) => {
  return (
    <div>
      <p className='message' id={`message${msgObj._id}`}>
        <strong>{msgObj.fromUser}:</strong> {msgObj.msg}
        <button
          className='editButton'
          id={`edit${msgObj._id}`}
          onClick={e => editMessage(e.target.id.slice(4))} // Extract the message id
        >Edit
        </button>
        <button 
          className='closeButton' 
          id={`close${msgObj._id}`}
          onClick={e => deleteMessage(e.target.id.slice(5))} // Extract the message id
        >x
        </button>
      </p>
      {/* <input 
        className='newComment' 
        id={`message${msgObj._id}`}
        type='text'
      ></input>
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
      
      </form>*/}
    </div>
  );
}

export default Message;