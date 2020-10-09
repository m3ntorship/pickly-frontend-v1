import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Home } from './pages/home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/friends" component={Friends} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile" component={profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Friends = () => {
  return (
    <div className="h-screen bg-c800">
      <h1>Hello, Friends</h1>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="h-screen bg-c800">
      <h1>Hello, Alerts</h1>
    </div>
  );
};

const profile = () => {
  return (
    <div className="h-screen bg-c800">
      <h1>Hello, Profile</h1>
    </div>
  );
};
