import React from 'react';

const Message = ({message, ...props}) => {
  return (
    <div>{message}</div>
  )
}

export default Message;
