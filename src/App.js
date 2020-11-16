import React ,{useState}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarSection';
import { Navigation } from '../src/components/NavbarSection';
import { Home } from './pages/home.jsx';
import { Profile } from './pages/profile.jsx';
import { Notifications } from './pages/notifications.jsx';
// import { Friends } from './pages/friends.jsx';
import { UserContextProvider } from './context/userContext';
import { LoginForm } from './pages/login';
import { ProtectedRoute } from './pages/protected-route';
import { Post } from './pages/post';
import { SinglePost } from './pages/singlePost';
import { Feedback } from './pages/feedback';
function App() {
  const [btnOnScroll, setBtnOnScroll] = useState();  
   window.addEventListener('scroll', () => {
    let scrollY = window.scrollY >= 500;
    setBtnOnScroll(scrollY)
  });
  const scrollTopHandling = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <div className="mb-24 md:mb-auto relative">
            <button
              onClick={scrollTopHandling}
              className={`bg-c1100 lg:w-16 lg:h-16 w-8 h-8 float-right mr-4 mb-auto  fixed rounded-full shadow-2xl justify-center items-center  ${
                btnOnScroll? 'md:flex hidden' : 'hidden'
              }`}
              style={{ bottom: '5%', right: '0' }}
            >
              <svg
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
              >
                <title />
                <path
                  fill="white"
                  d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z"
                />
              </svg>
            </button>
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              {/* we don't need it righ now 26-10-2020 */}
              {/* <ProtectedRoute path="/friends" component={Friends} /> */}
              <ProtectedRoute path="/notifications" component={Notifications} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/post" component={Post} />
              <ProtectedRoute path="/posts/:id" component={SinglePost} />
              <ProtectedRoute path="/feedbacks" component={Feedback} />
              <Route path="/login" component={LoginForm} />
            </Switch>
          </div>

          <div className="block md:hidden fixed bg-white md:bg-none z-50 bottom-0 w-full py-3">
            <Navigation />
          </div>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
