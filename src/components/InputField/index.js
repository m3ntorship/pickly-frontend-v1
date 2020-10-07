import React from 'react';
import { UploadingProgress } from './../Uploading-progress';
export const InputField = ({ imageURL, progress }) => {
  return (
    <div className=" w-full rounded-lg border border-solid border-c700 flex items-center p-4  ">
      <img src={imageURL} alt="" className="w-8 h-8 rounded-full" />
      <input
        type="text"
        name=""
        id=""
        placeholder={'What’s on your mind?'}
        className="mx-4 flex-auto min-w-0 text-c500 text-base font-primary font-regular leading-6 tracking-tighter md:tracking-wider"
      />
      <UploadingProgress className="right-0" progress={progress} />
    </div>
  );
};
