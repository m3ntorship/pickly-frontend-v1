import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


export const Icon = ({ iconURL, selected }) => {
  return (
    <div className={cn({ 'bg-c800': selected }, 'p-4 w-16 h-16 rounded-lg ')}>
      {selected ? (
        <img
          src={iconURL}
          alt="Icon"
          style={
            {filter:'invert(55%) sepia(99%) saturate(5620%) hue-rotate(240deg) brightness(99%) contrast(109%)'
            }
          }
          className="w-8 h-8"
        />
      ) : (
        <img src={iconURL} alt="Icon" className="w-8 h-8" />
      )}
    </div>
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

