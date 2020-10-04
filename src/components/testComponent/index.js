import React from 'react';
import PropTypes from 'prop-types';

export const TestComponent = ({ title, backgroundColor, fontSize }) => {
  return (
    <div className="bg-c400">
      <div className="container">
        <h1 style={{ backgroundColor, fontSize }} className="text-c1000">
          {title}
        </h1>
      </div>
    </div>
  );
};

TestComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  title: PropTypes.string.isRequired,
  /**
   * Is this the principal Test
   */
  backgroundColor: PropTypes.string,

  fontSize: PropTypes.string
};

TestComponent.defaultProps = {
  title: 'Test Component',
  backgroundColor: null,
  fontSize: '24px'
};
