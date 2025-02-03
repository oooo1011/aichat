import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // TODO: Implement send message logic
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
