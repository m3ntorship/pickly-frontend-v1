import React from 'react';
import background from './backgrounds/background_Loginpage.webp';

export const LoginFormSection = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex h-screen relative items-center justify-center "
    >
      <div
        className="z-10 w-full absolute min-h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
      ></div>
      <div
        className="h-full w-full bg-no-repeat bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url(${background})`
        }}
      ></div>
      <div className="bg-white absolute z-30 rounded-lg flex flex-col md:rounded-xlg items-center justify-center px-4 py-20 w-5/6 lg:px-4 md:w-3/4 lg:w-2/4 md:pb-40 md:pt-20 ">
        <div className="md:w-5/6">
          <h1 className="font-xbold text-xxlg w-full ">Pickly</h1>
          <button className="font-secondary font-bold text-base text-center bg-c200  text-white rounded-md md:rounded-lg py-4 my-16 px-12 md:w-full md:mx-auto">
            Login with Google
          </button>
        </div>
      </div>
    </form>
  );
};
