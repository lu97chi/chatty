import React, { useState } from 'react';
import Proptypes from 'prop-types';
import SocketIoClient from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import { handleReciveMessage, handleSendMessage } from './helpers';
import OnlineUsers from './OnlineUsers';


const Chat = ({ userName }) => {
  const history = useHistory();
  if (!userName) {
    history.push('/');
  }
  const [chatMessage, setChatmessage] = useState('');
  const [messages, setMessages] = useState([]);
  const io = SocketIoClient('192.168.0.6:3001');
  io.emit('sendUsername', userName);
  io.on('reciveMessage', (message) => handleReciveMessage(message, messages, setMessages));
  return (
    <div>
      <div>
        <strong>online OnlineUsers</strong>
        <OnlineUsers io={io} />
      </div>
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

Chat.propTypes = {
  userName: Proptypes.string.isRequired,
};

export default Chat;
