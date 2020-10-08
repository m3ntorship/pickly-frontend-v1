import React from 'react';

import background1 from './backgrounds/background1.png';
import background2 from './backgrounds/background2.png';
export const LoginForm = () => {
  return (
    <div className="w-full flex h-screen relative items-center justify-center ">
      <div
        className="z-10 w-full absolute min-h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
      ></div>
      <div
        className="h-full w-1/2 bg-no-repeat bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url(${background1})`
        }}
      ></div>
      <div
        className="h-full w-1/2 bg-no-repeat bg-cover bg-c100_op-10 z-0"
        style={{
          backgroundImage: `url(${background2})`
        }}
      ></div>
      <div className=" w-10/12 h-64 lg:w-lg lg:h-lg bg-white absolute z-30 rounded-xlg flex">
        <h1 className="font-xbold text-xxlg ">Cherrime</h1>
        <button></button>
      </div>
    </div>
  );
};
