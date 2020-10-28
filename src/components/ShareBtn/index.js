import React from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { Popup } from 'reactjs-popup';
import { useState } from 'react';

export const ShareBtn = ({ url }) => {
  const [text, setText] = useState('Copy post url');

  const clipboard = useClipboard({
    copiedTimeout: 600
  });
  const handleClick = React.useCallback(() => {
    clipboard.copy(url); // programmatically copying a value
    setText('coped');
  }, [clipboard, url]);

  const alertContentStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '5px',
    borderRaduis: '5px',
    border: '1px solid #eee',
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034)`,
    width: 'fit-content'
  };

  return (
    <div>
      <Popup
        trigger={
          <button>
            <ShareButton handleClick={handleClick} />
          </button>
        }
        position="left center"
        on="hover"
        contentStyle={alertContentStyle}
      >
        <span> {text} </span>
      </Popup>
    </div>
  );
};

const ShareButton = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="focus:outline-none outline-none">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-c500 inline-block w-5 md:w-8 h-5 md:h-8 "
      >
        <path
          fillRule="evenodd"
          ule="evenodd"
          d="M15 5C15 2.79086 16.7909 1 19 1C21.2091 1 23 2.79086 23 5C23 7.20914 21.2091 9 19 9C17.6346 9 16.429 8.31588 15.7072 7.27171L8.76803 10.6544C8.91821 11.0749 9 11.5279 9 12C9 12.4395 8.92912 12.8624 8.79816 13.258L15.6976 16.7423C16.4182 15.6903 17.6285 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19C15 18.8782 15.0054 18.7577 15.0161 18.6387L7.70513 14.9466C6.99302 15.6007 6.04314 16 5 16C2.79086 16 1 14.2091 1 12C1 9.79086 2.79086 8 5 8C6.0062 8 6.92562 8.37152 7.62857 8.98486L15.0181 5.38268C15.0061 5.25673 15 5.12908 15 5ZM21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5ZM21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19ZM5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
        />
      </svg>
    </div>
  );
};
