import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HandleEnter = (user, handleEnter) => {
  handleEnter(user);
};

const User = ({ handleEnter }) => {
  const [user, setUser] = useState('');
  return (
    <div>
      <input
        onKeyDown={(e) => (e.key === 'Enter' ? HandleEnter(user, handleEnter) : null)}
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        type="button"
        onClick={() => HandleEnter(user, handleEnter)}
      >
        Log
      </button>
    </div>
  );
};

User.propTypes = {
  handleEnter: PropTypes.func.isRequired,
};

export default User;
