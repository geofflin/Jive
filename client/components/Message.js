import React from 'react';

const Message = ({ msgObj }) => {
  console.log('The msgObj is', msgObj, typeof msgObj);
  return (
    <div>
      <p>{msgObj.fromUser}: {msgObj.msg}</p>
    </div>
  );
}

export default Message;