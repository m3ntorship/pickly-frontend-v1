import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


export const Icon = ({ iconURL, selected }) => {
  return (
    <div className={cn({ 'bg-c700': selected }, 'p-4 w-16 h-16 rounded-lg ')}>
      {selected ? (
        <img
          src={iconURL}
          alt="Icon"
          style={{
            filter:
              // 'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
              'invert(57%) sepia(95%) saturate(6975%) hue-rotate(246deg) brightness(97%) contrast(94%)'
          }}
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

