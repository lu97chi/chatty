import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import User from './containers/User';
import Chat from './containers/Chat';


function App() {
  const [username, setUsername] = useState('');
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <User handleEnter={(userName) => setUsername(userName)} />
        </Route>
        <Route path="/chat">
          <Chat userName={username} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
