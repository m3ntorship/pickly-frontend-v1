import React from 'react';
// import { TestComponent } from './components/testComponent';
import { UserContextProvider } from './components/LoginForm/userContext';
import { LoginForm } from './components/LoginForm/index';

function App() {
  return (
    <UserContextProvider>
      <div>
        <LoginForm />
      </div>
    </UserContextProvider>
  );
}

export default App;
