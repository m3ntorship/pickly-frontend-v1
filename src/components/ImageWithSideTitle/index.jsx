import React from 'react';

const ImageWithSideText = ({ imgUrl, title }) => {
  return (
    <div className="flex justify-around bg-c700 rounded py-2 hover:bg-c100 hover:opacity-75">
      <img src={imgUrl} alt="" />

      <span className="text-sm text-c500 font-semibold">{title}</span>
    </div>
  );
};

export default ImageWithSideText;
