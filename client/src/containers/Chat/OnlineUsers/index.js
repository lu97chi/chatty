/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Proptypes from 'prop-types';

const handleClickEvent = (id, io) => {
  io.emit('direcMessage', id);
};

const OnlineUsers = ({ io, activeUser }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  io.on('sendActiveUsers', (active) => {
    setActiveUsers(active);
  });
  console.log(activeUsers, 'active users');
  console.log(activeUser, 'active user');
  return (
    <div>
      {
        Object.keys(activeUsers).map((key) => (
          <button type="button" onClick={() => handleClickEvent(key, io)} key={key}>
            {activeUsers[key]}
            {activeUser[activeUsers[key]] === key ? 'Eres tu' : null}
          </button>
        ))
      }
    </div>
  );
};


OnlineUsers.propTypes = {
  io: Proptypes.any.isRequired,
  activeUser: Proptypes.object.isRequired,
};

export default OnlineUsers;
