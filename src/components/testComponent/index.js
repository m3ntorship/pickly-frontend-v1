import React from 'react';
import PropTypes from 'prop-types';



export const TestComponent = ({title, backgroundColor, fontSize}) => {
    return <div>
        <h1 
          style={{ backgroundColor, fontSize } }
        >{title}</h1>
    </div>
}


TestComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
    title: PropTypes.string.isRequired,
  /**
   * Is this the principal Test
   */
    backgroundColor: PropTypes.string,

    fontSize: PropTypes.string,
}

TestComponent.defaultProps = {
    title: "Test Component",
    backgroundColor: null,
    fontSize: '24px'
}
