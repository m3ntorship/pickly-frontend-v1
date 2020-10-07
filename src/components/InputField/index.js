import React from 'react';
import { uploadigProgress } from '../Uploading-progress/uploadingProgress.stories';
import { UploadingProgress } from './../Uploading-progress';
export const InputField = ({ imageURL, placeHold, progress }) => {
  return (
    <div className="w-full rounded-lg border border-solid border-c700 flex flex-row p-4">
      <img src={imageURL} alt="" className="w-10 h-10 rounded-full " />
      <input
        type="text"
        name=""
        id=""
        placeholder={placeHold}
        className="ml-4 text-c500 text-base font-primary font-regular leading-6 w-4/5 "
      />
      <uploadigProgress
        className="w-10 h-10 to z-10 bg-c200 "
        progress={progress}
      />
    </div>
  );
};
