import React from 'react';

const MessageItem = ({ author, body, timestamp }) => {
  return (
    <li>
      <p>{author}</p>
      <p>{body}</p>
      <span>{JSON.stringify(timestamp)}</span>
    </li>
  );
};

function MessagesList(props) {
  const { messages } = props;
  return (
    <ul>
      {messages ? (
        messages.map((msg, index)
         => <MessageItem key={index} {...msg} />)
      ) : (
        <li>Select your chat</li>
      )}
    </ul>
  );
}

export default MessagesList;