import React, { useState, useEffect } from 'react';
import { ProgressCircle } from './../Uploading-progress';

export const InputField = ({ imageURL, caption, onChange }) => {
  const [lettersCounter, setLettersCounter] = useState(null);

  useEffect(() => {
    setLettersCounter(caption.length);
  }, [caption]);

  return (
    <div className="mx-auto my-5 h-20 rounded-lg border border-solid border-c700 flex items-center p-4 z-10 ">
      <img src={imageURL} alt="" className="w-8 h-8 rounded-full " />
      <textarea
        name="postText"
        placeholder={'What’s on your mind?'}
        onChange={onChange}
        maxLength="100"
        value={caption}
        className="mx-4 z-0 h-16 md:h-10 md:mt-2 pl-l flex-auto min-w-0 text-base font-primary font-regular leading-6 tracking-tighter md:tracking-wider resize-none"
      ></textarea>
      <ProgressCircle className="right-0" progress={lettersCounter} />
    </div>
  );
};
