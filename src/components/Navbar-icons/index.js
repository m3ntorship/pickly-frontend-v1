import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


export const Icon = ({ iconURL, selected }) => {
  return (
    <div
      className={cn({ 'bg-c100_op-10': selected }, 'p-4 w-16 h-16 rounded-lg ')}
    >
      {selected ? (
        <img
          src={iconURL}
          alt="Icon"
          style={{
            filter:
              'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
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

