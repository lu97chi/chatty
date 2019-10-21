import React, { useState } from 'react';
import Proptypes from 'prop-types';


const OnlineUsers = ({ io }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  io.on('activeUsers', (active) => console.log((active)));
  console.log(activeUsers);
  return (
    <div>
        s
      {/* {activeUsers.map((user) => <p>{user}</p>)} */}
    </div>
  );
};


OnlineUsers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  io: Proptypes.any.isRequired,
};

export default OnlineUsers;
