import React from 'react';
import cn from 'classnames';

export const HeartIcon = ({ voted, color = '#fff' }) => {
  return (
    <button
      className={cn({ 'flex justify-center self-end': voted })}
      style={{ width: 'fit-content' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50%"
        height="50%"
        viewBox="0 0 24 24"
        fill={color}
      >
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
      </svg>
    </button>
  );
};
