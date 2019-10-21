import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const HandleEnter = (user, router, handleEnter) => {
  handleEnter(user);
  router.push('/chat');
};

const User = ({ handleEnter }) => {
  const [user, setUser] = useState('');
  const history = useHistory();
  return (
    <div>
      <input
        onKeyDown={(e) => (e.key === 'Enter' ? HandleEnter(user, history, handleEnter) : null)}
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        type="button"
        onClick={() => HandleEnter(user, history, handleEnter)}
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
