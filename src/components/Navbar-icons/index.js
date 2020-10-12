import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Icon = ({ iconURL, to, exact }) => {
  return (
    <NavLink
      exact={exact}
      to={to}
      className="inline-block rounded-lg w-16 h-16 p-4 mr-8 cursor-pointer"
      activeClassName="bg-c100_op-10"
      activeStyle={{
        filter:
          'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
      }}
    >
      <img src={iconURL} alt="Icon" className="inline" />
    </NavLink>
  );
};

Icon.propTypes = {
  /**
   * this is the URL of the icon image!
   */
  iconURL: PropTypes.string.isRequired,
  /**
   * this to check this icon selected or not!
   */
  selected: PropTypes.bool
};
