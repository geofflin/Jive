import React from 'react';

const Message = ({ msgObj }) => {
  return (
    <div>
      <p><strong>{msgObj.fromUser}:</strong> {msgObj.msg}</p>
    </div>
  );
}

export default Message;