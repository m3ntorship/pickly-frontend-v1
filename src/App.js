import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Home } from './pages/home.jsx';
import { Profile } from './pages/profile.jsx';
import { UserContextProvider } from './context/userContext';
import { LoginForm } from './components/LoginForm/index';

function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/friends" component={Friends} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;

const Friends = () => {
  return (
    <div className="h-screen bg-c800">
      <h1 className="text-c100">Hello, Friends</h1>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="h-screen bg-c800">
      <h1 className="text-c200">Hello, Alerts</h1>
    </div>
  );
};
