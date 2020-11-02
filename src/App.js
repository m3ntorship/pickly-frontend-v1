import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Home } from './pages/home.jsx';
import { Profile } from './pages/profile.jsx';
import { Notifications } from './pages/notifications.jsx';
// import { Friends } from './pages/friends.jsx';
import { UserContextProvider } from './context/userContext';
import { LoginForm } from './pages/login';
import { ProtectedRoute } from './pages/protected-route';
import { Post } from './pages/post';
import { SinglePost } from './pages/singlePost';
import {Feedback} from "./pages/feedback"

function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            {/* we don't need it righ now 26-10-2020 */}
            {/* <ProtectedRoute path="/friends" component={Friends} /> */}
            <ProtectedRoute path="/notifications" component={Notifications} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/post" component={Post} />
            <ProtectedRoute path="/posts/:id" component={SinglePost} />
            <ProtectedRoute path="/feedback" component={Feedback} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
