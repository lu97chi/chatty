/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { handleReciveMessage, handleSendMessage } from './helpers';


const ChatRoom = ({ userName, io }) => {
  const [chatMessage, setChatmessage] = useState('');
  const [messages, setMessages] = useState([]);
  io.on('reciveMessage', (message) => handleReciveMessage(message, messages, setMessages));
  return (
    <div>
      <input
        value={chatMessage}
        type="text"
        onChange={(e) => setChatmessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleSendMessage({ message: e.target.value, user: userName }, setChatmessage, io) : null)}
      />
      {messages.map((message) => <p key={`${message.message}-${Math.random()}`}>{`${message.user} ${message.message}`}</p>)}
    </div>
  );
};

ChatRoom.propTypes = {
  userName: Proptypes.string.isRequired,
  io: Proptypes.any.isRequired,
};

export default ChatRoom;
