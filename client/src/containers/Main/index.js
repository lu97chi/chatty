import React, { useState } from 'react';
import SocketIoClient from 'socket.io-client';
import User from '../User';
import Chat from '../Chat';

const handleConection = (username, setUsername, setIo) => {
  setUsername(username);
  console.log(`${process.env.REACT_APP_IP_ADDRESS}:${process.env.REACT_APP_ENV_PORT}`);
  setIo(SocketIoClient(`${process.env.REACT_APP_IP_ADDRESS}:${process.env.REACT_APP_ENV_PORT}`));
};

const Main = () => {
  const [userName, setUsername] = useState('');
  const [io, setIo] = useState(null);
  return (
    <div>
      { !userName ? <User handleEnter={((user) => handleConection(user, setUsername, setIo))} />
        : null}
      {io ? <Chat userName={userName} io={io} /> : null}
    </div>
  );
};

export default Main;
