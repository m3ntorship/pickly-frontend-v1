import React from 'react';
import PostSection from './components/PostSection';

function App() {
  return (
    <div className="App bg-c700 h-full">
      <div className="container">
        <PostSection
          leftBgImage="https://images.unsplash.com/photo-1602575910330-f9807b05f69d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          popupActionOptions={[0]}
          postCaption="One of the perks of working in an international company is sharing knowledge with your colleagues."
          postDate="simple subtitle here"
          rightBgImage="https://images.unsplash.com/photo-1602341612227-1612891401ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          savesNumbers="20"
          shareUrl="https://www.m3ntorship.com"
          userImage="https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          userName="Someone Profile"
          votesNumbers="120k"
        />
      </div>
    </div>
  );
}

export default App;
