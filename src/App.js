import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Home } from './pages/home.jsx';
import React from 'react';
import { UserContextProvider } from './context/userContext';
import { LoginForm } from './components/LoginForm/index';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/friends" component={Friends} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/profile" component={profile} />
            <Route path="/login" component={LogIn} />
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

const profile = () => {
  return (
    <div className="h-screen bg-c800">
      <h1 className="text-c300">Hello, Profile</h1>
    </div>
  );
};

const LogIn = () => {
  const history = useHistory();
  return (
    <div className="h-screen bg-c800 w-full my-10 mx-auto text-center">
      <h1 className="text-c300">Please Login</h1>
      <button
        className="p-5 border-none m-5 bg-c100 text-white text-lg"
        onClick={() => {
          history.push('/profile');
        }}
      >
        LogIn
      </button>
    </div>
  );
};
