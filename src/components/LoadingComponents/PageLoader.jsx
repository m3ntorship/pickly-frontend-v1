import React from 'react';
import ContentLoader from 'react-content-loader';

const PageLoader = props => (
  <div className="container">
    <ContentLoader
      speed={2}
      width={600}
      height={200}
      viewBox="0 0 600 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
      className="w-full"
    >
      <rect x="0" y="55" rx="0" ry="0" width="100%" height="109" />
    </ContentLoader>
  </div>
);

export default PageLoader;
