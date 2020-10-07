import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const ToggleButton = ({ title, selected, onToggle }) => {
  const [toggled, setToggled] = useState(selected);

  const toggle = () => {
    console.log('clicked');
    console.log(selected);
    const currentState = !toggled;
    setToggled(currentState);
    onToggle(currentState);
  };
  return (
    <div>
      <button
        className={cn(
          ' w-56 h-10 rounded-lg flex flex-row items-center py-2 px-4 bg-c700 ',
          { 'bg-c100_op-15': toggled }
        )}
        onClick={toggle}
      >
        <div className="h-6 flex items-center relative">
          <div
            className={cn(
              {
                'bg-white right-auto': !toggled
              },
              ' bg-c100 right-0  w-6 h-6  shadow rounded-full absolute z-10'
            )}
          ></div>
          <div
            className={cn(
              {
                ' bg-c400 opacity-25': !toggled
              },
              'w-10 h-4 bg-c100 opacity-50 rounded-lg  z-0'
            )}
          ></div>
        </div>
        <p className=" font-semibold font-primary text-sm leading-5 tracking-wide text-c500 ml-2 ">
          {title}
        </p>
      </button>
    </div>
  );
};

ToggleButton.propTypes = {
  /**
   * this is the title of the button!
   */
  title: PropTypes.string.isRequired,
  /**
   * this to check the button selected or not!
   */
  selected: PropTypes.bool,
  /**
   * this function return the current state
   */
  onToggle: PropTypes.string
};
