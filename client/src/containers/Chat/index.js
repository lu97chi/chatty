/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import OnlineUsers from './OnlineUsers';
import ChatRoom from './ChatRoom';


const Chat = ({ userName, io }) => {
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    io.emit('sendUsername', userName);
    io.on('sendIdUserName', (user) => setActiveUser(user));
  }, []);

  useEffect(() => () => {
    io.emit('userDisconected', userName);
  }, []);
  return (
    <div>
      <div>
        <strong>online users</strong>
        <OnlineUsers activeUser={activeUser} userName={userName} io={io} />
      </div>
      <div>
        <ChatRoom io={io} userName={userName} />
      </div>
    </div>
  );
};

Chat.propTypes = {
  userName: Proptypes.string.isRequired,
  io: Proptypes.any.isRequired,
};

export default Chat;
