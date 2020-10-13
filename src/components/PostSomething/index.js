import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { MultiBtn } from './MultipleImagesBtn';
import { OneImageBtn } from './OneImageBtn';
import Popup from 'reactjs-popup';
import { UploadSection } from '../UploadSection';

export const PostSomething = () => {
  return (
    <section className="rounded-lg  pb-5 pt-3 bg-white">
      <Heading
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
        fontSize={HEADING_OPTIONS.FONT_SIZE.BASE}
        fontWeight={HEADING_OPTIONS.FONT_WEIGHT.MEDIUM}
        lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
        className="mb-3 ml-5"
      >
        Post Something
      </Heading>
      <hr className="border-c700" />
      <div className="flex">
        <Popup
          trigger={
            <div>
              <MultiBtn />
            </div>
          }
          modal
        >
          <UploadSection />
        </Popup>
        <Popup
          trigger={
            <div>
              <OneImageBtn />
            </div>
          }
          modal
        >
          <h1>This was Build By M3ntorship Team.</h1>
        </Popup>
      </div>
    </section>
  );
};
