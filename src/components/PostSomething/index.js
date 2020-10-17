import React, { useRef } from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { MultiBtn } from './MultipleImagesBtn';
import { OneImageBtn } from './OneImageBtn';
import Popup from 'reactjs-popup';
import { UploadSection } from '../UploadSection';

export const PostSomething = () => {
  const popupRef = useRef();

  const handleCloseUpload = () => {
    popupRef.current.close();
  };

  return (
    <section className="rounded-lg  pb-5 pt-3 bg-white">
      <Heading
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
        fontSize={HEADING_OPTIONS.FONT_SIZE.BASE}
        fontWeight={HEADING_OPTIONS.FONT_WEIGHT.MEDIUM}
        lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
        className="mb-3 ml-2 sm:ml-5"
      >
        Post Something
      </Heading>
      <hr className="border-c700" />
      <div className="flex mt-3  sm:ml-5">
        <Popup
          closeOnDocumentClick={false}
          ref={popupRef}
          contentStyle={{
            borderRadius: '10px',
            overflowY: 'scroll',
            margin: '10px auto'
          }}
          trigger={
            <div>
              <MultiBtn />
            </div>
          }
          modal
        >
          <UploadSection handleCloseUpload={handleCloseUpload} />
        </Popup>
        <Popup
          trigger={
            <div>
              <OneImageBtn />
            </div>
          }
          modal
        >
          <h1 className="text-xlg text-center my-10 ">
            Div With 2000px height and can't access all the height !!!!.
          </h1>
          <div style={{ height: '2000px' }} className=" overflow-visible"></div>
        </Popup>
      </div>
    </section>
  );
};
