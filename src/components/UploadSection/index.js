import React, { useState } from 'react';
import { ReusableDiv } from '../DivWithCenterdChildren';
import { InputField } from '../InputField';
import { Heading } from '../Heading';
import { ToggleButton } from '../ToggleButton';
import { Button } from '../Button';
import { PICKLY } from '../../apis/clients';
import { useHistory } from 'react-router-dom';
import { OneImage } from './OneImage';
import Popup from 'reactjs-popup';
import cn from 'classnames';

export const UploadSection = () => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [postAnonymously, setPostAnonymously] = useState(false);
  const [caption, setCaption] = useState('');
  const history = useHistory();
  const [imagesArr, setImagesArr] = useState([1, 1]); // will handle by user choice

  const setImagesArrFun = num => {
    const imagesArr = new Array(num).fill(num);
    setImagesArr(imagesArr);
  };

  const toggleSelected = () => {
    setPostAnonymously(!postAnonymously);
  };

  const handleInputChange = e => {
    setCaption(e.target.value);
  };

  // Post Data to the database Function
  const postData = e => {
    e.preventDefault();
    const form = new FormData();
    console.log(imagesToUpload);
    for (let img of imagesToUpload) {
      form.append('images', img);
    }
    form.append('caption', caption);
    form.append('isAnonymous', postAnonymously);
    console.log(postAnonymously);
    PICKLY.createPost(form)
      .then(({ data }) => {
        history.push('/');
      })
      .catch(console.error);
  };

  const setFun = image => {
    setImagesToUpload([...imagesToUpload, image]);
  };

  return (
    <div className="container">
      {PostSomethingHeading}

      <hr className="w-full text-c800 h-1" />
      <div style={{ width: 'calc(100% - 2rem)' }} className="mx-auto mb-5">
        <InputField
          caption={caption}
          onChange={handleInputChange}
          imageURL="https://www.ludoviccareme.com/files/image_88_image_fr.jpg"
        />
        <ToggleButton
          selected={postAnonymously}
          toggleSelected={toggleSelected}
          title="Post anonymoslly"
        />
        <Button
          isRounded
          shadow
          backgroundColor="White"
          color="SecondaryGrey"
          padding="small"
          className="mt-4"
        >
          <OptionsPopup clickFun={setImagesArrFun} />
        </Button>
      </div>

      <div
        className={cn('relative grid grid-cols-1   gap-1', {
          'sm:grid-cols-2': imagesArr.length > 1
        })}
      >
        {imagesArr.length > 1 && or}
        {imagesArr.map((img, index) => (
          <div className="relative">
            <OneImage setFun={setFun} id={index} imagesNum={imagesArr.length} />
          </div>
        ))}
      </div>

      {warningParagrapg}

      <hr className="w-full text-c800 h-1" />

      <PostButton postData={postData} />
    </div>
  );
};

// Helper components

const PostSomethingHeading = (
  <div>
    <Heading
      as="p"
      fontSize="sm"
      fontWeight="medium"
      lineHeight="normal"
      textAlign="left"
      textColor="lightblack"
      className="my-2 inline-block"
    >
      Post Something
    </Heading>
  </div>
);

const OptionsPopup = ({ clickFun }) => {
  const [currentOpt, setCurrentOpt] = useState('Two Images');
  const optionsList = [
    {
      option: 'One Image',
      num: 1
    },
    {
      option: 'Two Images',
      num: 2
    },
    {
      option: 'Three Images',
      num: 3
    },
    {
      option: 'Four Images',
      num: 4
    }
  ];
  const contentStyle = { hieght: '50%' };
  const arrowStyle = { display: 'none' }; // style for an svg element

  return (
    <Popup
      trigger={<button>{currentOpt}</button>}
      position="center center"
      on={['hover', 'focus']}
      {...{ contentStyle, arrowStyle }}
    >
      <div>
        {optionsList.map(({ option, num }) => {
          return (
            <div
              key={num}
              className="py-4 px-4 text-md hover:bg-c100 hover:text-white transition-all duration-100 cursor-pointer"
              onClick={() => {
                clickFun(num);
                setCurrentOpt(option);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </Popup>
  );
};

const or = (
  <div
    className={cn('absolute z-10 hidden sm:block')}
    style={{
      left: 'calc(50% - 15px)',
      top: 'calc(50% - 15px)'
    }}
  >
    <ReusableDiv
      bgColor="white"
      className="text-xs"
      divHeight="30px"
      divWidth="30px"
      fullRound
      withShadow
    >
      <div>OR</div>
    </ReusableDiv>
  </div>
);

const warningParagrapg = (
  <div
    className="my-5 mx-auto opacity-50"
    style={{ width: 'calc(100% - 2rem)' }}
  >
    <p className="text-black text-xs">
      it’s not recommended to make a poll with photos of your friends without
      thier consent. we will remove a poll, if it’s reporte.
      <a className="text-c200" href="/">
        Community Guidelines
      </a>
    </p>
  </div>
);

const PostButton = ({ postData }) => {
  return (
    <div style={{ width: 'calc(100% - 2rem)' }}>
      <form>
        <Button
          type="submit"
          backgroundColor="PrimaryGrey"
          color="White"
          isRounded
          padding="big"
          className="font-semibold text-xs py-1 float-right my-2"
          handleClick={postData}
        >
          Post
        </Button>
      </form>
    </div>
  );
};
