/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { handleReciveMessage } from './helpers';
import Message from '../../../components/Message';
import InputMessage from '../../../components/InputMessage';


const ChatRoom = ({ userName, io, activeUser }) => {
  const [messages, setMessages] = useState([]);
  io.on('reciveMessageGroupal', (message) => handleReciveMessage(message, messages, setMessages));
  io.on('reciveMessage', (message) => handleReciveMessage(message, messages, setMessages));
  io.on('writingStatus', (user) => console.log(user));
  return (
    <div>
      <InputMessage io={io} userName={userName} activeUser={activeUser} />
      {messages.map((message, i) => <Message message={message.message} itsWriting={i % 3 === 0} itsMe={message.user === userName} key={`${message.message}-${Math.random()}`} />)}
    </div>
  );
};

ChatRoom.propTypes = {
  userName: Proptypes.string.isRequired,
  io: Proptypes.any.isRequired,
  activeUser: Proptypes.any.isRequired,
};

export default ChatRoom;
