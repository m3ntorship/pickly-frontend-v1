import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Button, BUTTON_OPTIONS } from '../Button';
import Icon from './Icon1.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const MultiBtn = () => {
  return (
    <Popup
      trigger={
        <Button
          shadow={true}
          isRounded={true}
          padding={BUTTON_OPTIONS.PADDING.BIG}
          color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
          className="flex ml-5 mt-3"
        >
          <i className="mr-3">
            <img src={Icon} alt="choose multi"></img>
          </i>
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
            fontSize={HEADING_OPTIONS.FONT_SIZE.BASE}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
          >
            Multiple images
          </Heading>
        </Button>
      }
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
            voluptas rem alias. Vitae?
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
