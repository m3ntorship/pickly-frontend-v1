import React, { useState, useEffect } from 'react';
import { ProgressCircle } from './../Uploading-progress';

export const InputField = ({ imageURL, caption, onChange }) => {
  const [lettersCounter, setLettersCounter] = useState(null);
  const [validationMsg, setValidationMsg] = useState('');

  useEffect(() => {
    setLettersCounter(caption.length);
  }, [caption]);

  return (
    <div className="mb-5 mx-auto">
      <div
        className="mb-3 rounded-lg flex items-center p-2 z-10"
        style={{
          boxShadow:
            '0px 0px 1px rgba(0, 0, 0, 0.039), 0px 0.5px 1.5px rgba(0, 0, 0, 0.19)'
        }}
      >
        <img src={imageURL} alt="" className="w-8 h-8 rounded-full " />
        <textarea
          onBlur={() => {
            if (caption.length === 0) {
              setValidationMsg('Caption Can not Be Empty');
            } else {
              setValidationMsg('');
            }
          }}
          onFocus={() => setValidationMsg('')}
          name="postText"
          placeholder={'What’s on your mind?'}
          onChange={onChange}
          maxLength="100"
          value={caption}
          className="mx-4 z-0 h-16 md:h-10 md:mt-2 pl-l flex-auto min-w-0 text-base font-primary font-regular leading-6 tracking-tighter md:tracking-wider resize-none"
        ></textarea>
        <ProgressCircle className="right-0" progress={lettersCounter} />
      </div>
      <span className="text-xs text-c200">{validationMsg}</span>
    </div>
  );
};
