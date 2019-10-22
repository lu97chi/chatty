import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import User from './containers/User';
import Chat from './containers/Chat';
import Main from './containers/Main';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
          {/* <User handleEnter={(userName) => setUsername(userName)} /> */}
        </Route>
        <Route path="/chat">
          {/* <Chat userName={username} /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
