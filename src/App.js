import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Home } from './pages/home.jsx';
import { Profile } from './pages/profile.jsx';
import { Notifications } from './pages/notifications.jsx';
import { Friends } from './pages/friends.jsx';
import { UserContextProvider } from './context/userContext';
import { LoginForm } from './components/LoginForm/index';
import { ProtectedRoute } from './pages/protected-route';

function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/friends" component={Friends} />
            <ProtectedRoute path="/notifications" component={Notifications} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
