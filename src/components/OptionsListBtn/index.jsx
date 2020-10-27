import React from 'react';
import { useState } from 'react';

const OptionsListBtn = () => {
  const [listDisplay, setListDisplay] = useState(false);

  return (
    <div className="relative inline-block mt-6">
      <button
        className="w-1/2 text-c300"
        onClick={() => setListDisplay(!listDisplay)}
        onBlur={() => setListDisplay(false)}
      >
        <img
          className="w-16"
          src="https://www.flaticon.com/svg/static/icons/svg/219/219424.svg"
          alt=""
        />
      </button>
      {listDisplay && (
        <div className="absolute left-0 w-48 z-10 border shadow-xl border-c100_op-10">
          <ul>
            <li className="py-4 px-5 hover:bg-c100_op-10 cursor-pointer">
              Option 1
            </li>
            <li className="py-4 px-5 hover:bg-c100_op-10 cursor-pointer">
              Option 2
            </li>
            <li className="py-4 px-5 hover:bg-c100_op-10 cursor-pointer">
              Option 3
            </li>
            <li className="py-4 px-5 hover:bg-c100_op-10 cursor-pointer">
              Option 4
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsListBtn;
