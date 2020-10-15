import React from 'react';

const ImageWithSideTitle = ({ imgURL, iconURL, title, subTitle }) => {
  return (
    <div className="flex w-64">
      <div className="rounded-full h-10 w-10">
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            className={` ${imgURL ? 'rounded-full h-full w-full' : 'h-4 w-4'}`}
            src={imgURL || iconURL}
            alt=""
          />
        </div>
      </div>

      <div className="ml-3 inline-block my-auto">
        <h6 className="text-sm font-semibold text-c400 leading-none">
          {title}
        </h6>
        {subTitle && (
          <span className="block mt-1 text-c500 text-xs text-left">
            {subTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageWithSideTitle;
