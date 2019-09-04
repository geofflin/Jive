import React from 'react';

const Message = ({ msgObj, deleteMessage, editMessage }) => {
  return (
    <li>
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
    </li>
  );
}

export default Message;