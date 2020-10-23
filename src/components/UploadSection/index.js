import React, { useState } from 'react';
import { ReusableDiv } from '../DivWithCenterdChildren';
import { InputField } from '../InputField';
import { Heading } from '../Heading';
import { ToggleButton } from '../ToggleButton';
import { Button } from '../Button';
import { PICKLY } from '../../apis/pickly';
import { useHistory } from 'react-router-dom';
import { OneImage } from './OneImage';
import cn from 'classnames';

export const UploadSection = () => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [postAnonymously, setPostAnonymously] = useState(false);
  const [caption, setCaption] = useState('');
  const history = useHistory();
  const [imagesNum, setImagesNum] = useState([1, 2]); // will handle by user choice

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
    PICKLY.post('/posts', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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
      </div>

      <div
        className={cn('relative grid grid-cols-1 gap-1', {
          'sm:grid-cols-2': imagesNum.length > 1
        })}
      >
        {imagesNum.length > 1 && or}
        {imagesNum.map(img => (
          <div className="relative">
            <OneImage setFun={setFun} id={img} imagesNum={imagesNum.length} />
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
