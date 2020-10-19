import { Button, BUTTON_OPTIONS } from '../Button';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { NavLink } from 'react-router-dom';
import React from 'react';

const CreatePostButton = () => {
  return (
    <div className="w-48">
      <NavLink exact to="/post">
        <Button
          shadow={true}
          isRounded={true}
          color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
          className="flex flex-shrink py-3 px-4 my-6"
        >
          <i className="mr-3 h-6 w-6">
            <img
              src={
                'https://www.flaticon.com/svg/static/icons/svg/1578/1578253.svg'
              }
              alt="choose one"
            ></img>
          </i>
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
            fontSize={HEADING_OPTIONS.FONT_SIZE.XSMALL}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
            lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
            className="sm:text-base"
          >
            Create Post
          </Heading>
        </Button>
      </NavLink>
    </div>
  );
};

export default CreatePostButton;
