/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { handleSendMessage } from '../../containers/Chat/ChatRoom/helpers';

const InputMessage = ({ userName, io, activeUser }) => {
  const [chatMessage, setChatmessage] = useState('');
  const [writting, setWritting] = useState(0);
  useEffect(() => {
    if (chatMessage) {
      setWritting(writting + 1);
    } else {
      setWritting(0);
      const writingUser = activeUser ? activeUser[userName] : '';
      io.emit('userWriting', { activeUser: writingUser, writing: false });
    }
  }, [chatMessage]);

  useEffect(() => {
    if (writting === 1) {
      io.emit('userWriting', { activeUser: activeUser[userName], writing: true });
    }
  }, [writting]);
  return (
    <div>
      <input
        value={chatMessage}
        type="text"
        onChange={(e) => setChatmessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleSendMessage({ message: e.target.value, user: userName }, setChatmessage, io) : null)}
      />
    </div>
  );
};

InputMessage.propTypes = {
  userName: Proptypes.string.isRequired,
  io: Proptypes.any.isRequired,
  activeUser: Proptypes.any.isRequired,
};

export default InputMessage;
