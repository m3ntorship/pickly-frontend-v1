import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const dotsSvg = (
  <svg
    width="18"
    height="4"
    viewBox="0 0 18 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0ZM9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0ZM18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4C17.1046 4 18 3.10457 18 2Z"
      fill="#92929D"
    />
  </svg>
);

export default ({ options, position = 'bottom', appearOn = 'click' }) => (
  <Popup
    trigger={
      <button
        style={{ minWidth: '34px', minHeight: '34px' }}
        className="rounded-full shadow-2xl flex justify-center items-center"
      >
        {dotsSvg}
      </button>
    }
    on={appearOn}
    position={position}
    keepTooltipInside
  >
    {options.map(({ option, index }) => {
      return (
        <div
          key={index}
          className="py-2 px-10 text-md hover:bg-c100 hover:text-white transition-all duration-100 cursor-pointer"
        >
          {option}
        </div>
      );
    })}
  </Popup>
);
