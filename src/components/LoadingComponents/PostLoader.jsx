import React from 'react';
import ContentLoader from 'react-content-loader';

const PostLoader = props => (
  <div className="container">
    <ContentLoader
      speed={2}
      width={600}
      height={'100%'}
      viewBox="0 0 600 700"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
      className="max-w-full"
    >
      <circle cx="29" cy="47" r="25" />
      <rect x="66" y="34" rx="2" ry="2" width="138" height="7" />
      <rect x="66" y="54" rx="2" ry="2" width="106" height="5" />
      <rect x="5" y="105" rx="0" ry="0" width="372" height="6" />
      <rect x="7" y="125" rx="0" ry="0" width="300" height="6" />
      <rect x="8" y="149" rx="0" ry="0" width="48%" height="277" />
      <rect x="51%" y="150" rx="0" ry="0" width="48%" height="277" />
    </ContentLoader>
  </div>
);

export default PostLoader;
