import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Popup from 'reactjs-popup';
import { ReusableDiv } from '../DivWithCenterdChildren';
import { InputField } from '../InputField';
import { Heading } from '../Heading';
import { ToggleButton } from '../ToggleButton';
import { Button } from '../Button';
import { PICKLY } from '../../apis/pickly';

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

export const UploadSection = ({ handleCloseUpload }) => {
  // =============== crop image states ===========================
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 3 / 4
  });
  const [completeCropOne, setCompleteCropOne] = useState(null);
  const [completeCropTwo, setCompleteCropTwo] = useState(null);
  const [cropedImageOne, setCropedImageOne] = useState(null);
  const [cropedImageTwo, setCropedImageTwo] = useState(null);
  const [imageOneToUpload, setImageOneToUpload] = useState();
  const [imageTwoToUpload, setImageTwoToUpload] = useState();
  const [imgOne, setImgOne] = useState(null);
  const [imgTwo, setImgTwo] = useState(null);
  const previewCanvasRefOne = useRef(null);
  const previewCanvasRefTwo = useRef(null);
  const imgOnePopupRef = useRef();
  const imgTwoPopupRef = useRef();
  const imgOneRef = useRef();
  const imgTwoRef = useRef();

  // ======== Other components State and Functions ===========
  const [postAnonymously, setPostAnonymously] = useState(false);
  const [caption, setCaption] = useState('');

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
    form.append('images', imageOneToUpload);
    form.append('images', imageTwoToUpload);
    form.append('caption', caption);
    form.append('isAnonymous', postAnonymously);
    console.log(postAnonymously);
    PICKLY.post('/posts', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(({ data }) => {
        handleCloseUpload();
      })
      .catch(console.error);
  };
  //===================== IT'S HERE ALL FOR THE CROP IMAGE SECTIONS =========================================

  const onSelectFileOne = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgOne(reader.result);
        openImgOnePopup();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSelectFileTwo = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgTwo(reader.result);
        openImgTwoPopup();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoadOne = useCallback(img => {
    imgOneRef.current = img;
  }, []);

  const onLoadTwo = useCallback(img => {
    imgTwoRef.current = img;
  }, []);

  useEffect(() => {
    if (
      !completeCropTwo ||
      !previewCanvasRefTwo.current ||
      !imgTwoRef.current
    ) {
      return;
    }

    const image = imgTwoRef.current;
    const canvas = previewCanvasRefTwo.current;
    const crop = completeCropTwo;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completeCropTwo]);

  useEffect(() => {
    if (
      !completeCropOne ||
      !previewCanvasRefOne.current ||
      !imgOneRef.current
    ) {
      return;
    }

    const image = imgOneRef.current;
    const canvas = previewCanvasRefOne.current;
    const crop = completeCropOne;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completeCropOne]);

  // Handle Img One Popup
  const openImgOnePopup = () => imgOnePopupRef.current.open();
  const closeImgOnePopup = () => imgOnePopupRef.current.close();

  // Handle Img One Popup
  const openImgTwoPopup = () => imgTwoPopupRef.current.open();
  const closeImgTwoPopup = () => imgTwoPopupRef.current.close();

  const handleFinishCropOne = () => {
    closeImgOnePopup();
    previewCanvasRefOne.current.toBlob(blob => {
      setImageOneToUpload(new File([blob], 'nile', { type: 'image/jpeg' }));
    });
    setCropedImageOne(previewCanvasRefOne.current.toDataURL());
  };

  const handleFinishCropTwo = () => {
    closeImgTwoPopup();
    previewCanvasRefTwo.current.toBlob(function (blob) {
      setImageTwoToUpload(new File([blob], 'nile', { type: 'image/jpeg' }));
    });
    setCropedImageTwo(previewCanvasRefTwo.current.toDataURL());
  };

  return (
    <div className="mx-auto my-auto rounded-lg">
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
        {/* Close Button */}
        <div
          className="inline-block float-right mt-2 cursor-pointer"
          onClick={handleCloseUpload}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#212429"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#212429"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* &&&&&&&&&&&&&&&&&&&&&& Input field and post options &&&&&&&&&&&&&&&&&&&&&& */}

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

      {/* &&&&&&&&&&&&&&&&&&&&&& Start Upload Images Section &&&&&&&&&&&&&&&&&&&&&& */}

      <div className="relative" style={{ height: '350px' }}>
        {/* Here is the OR centerd component */}
        <div
          className="absolute z-10"
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
        {/*
        =================================================================
        Crop Image One
        =================================================================
*/}
        <div
          className="absolute left-0 h-full"
          style={{ width: 'calc(50% - 2px)' }}
        >
          <label htmlFor="file-one" className="cursor-pointer">
            <ReusableDiv
              bgColor={!cropedImageOne && 'c900'}
              rounded
              divHeight="100%"
            >
              <input
                id="file-one"
                type="file"
                accept="image/*"
                onChange={onSelectFileOne}
                className="hidden"
              />
              {!cropedImageOne && (
                <div className="text-center">
                  <div className="mx-auto mb-3 w-5/12">
                    <svg
                      fill="none"
                      height="86"
                      viewBox="0 0 90 86"
                      width="90"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        cliprole="evenodd"
                        d="M89.625 55.1209V71.2625C89.625 79.1507 82.9416 85.5 74.75 85.5H67.2712H67.2539H15.25C7.05845 85.5 0.375 79.1507 0.375 71.2625V14.7375C0.375 6.84928 7.05845 0.5 15.25 0.5H74.75C82.9416 0.5 89.625 6.84928 89.625 14.7375V55.1053C89.625 55.1105 89.625 55.1157 89.625 55.1209ZM85.3751 56.0507L65.3429 37.7934L45.3081 55.8704L68.2068 81.2498H74.7501C80.6418 81.2498 85.3751 76.7532 85.3751 71.2623V56.0507ZM85.375 50.3006V14.7375C85.375 9.24662 80.6417 4.75 74.75 4.75H15.25C9.35829 4.75 4.625 9.24662 4.625 14.7375V66.1414L29.3326 41.4955C30.1931 40.6372 31.5969 40.6741 32.4111 41.5765L42.461 52.7152L63.9264 33.3473C64.7382 32.6148 65.9733 32.6179 66.7814 33.3544L85.375 50.3006ZM62.4823 81.2495L30.7521 46.0818L4.6624 72.1063C5.11802 77.2064 9.66314 81.2495 15.2498 81.2495H62.4823ZM28.8097 28.9753C24.2841 28.9753 20.6133 25.3136 20.6133 20.7941C20.6133 16.2745 24.2841 12.6128 28.8097 12.6128C33.3353 12.6128 37.0061 16.2745 37.0061 20.7941C37.0061 25.3136 33.3353 28.9753 28.8097 28.9753ZM28.8097 24.7253C30.9905 24.7253 32.7561 22.964 32.7561 20.7941C32.7561 18.6241 30.9905 16.8628 28.8097 16.8628C26.629 16.8628 24.8633 18.6241 24.8633 20.7941C24.8633 22.964 26.629 24.7253 28.8097 24.7253Z"
                        fill="#92929D"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm opacity-50 md:my-5 font-bold">
                      Choice 1
                    </h2>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm leading-normal text-c500 mx-auto my-2">
                      click to upload your image
                    </p>
                  </div>
                </div>
              )}
              {cropedImageOne && (
                <img
                  alt=""
                  src={cropedImageOne}
                  className="absolute h-full w-full left-0 top-0 object-cover"
                />
              )}
            </ReusableDiv>
          </label>
        </div>
        <Popup ref={imgOnePopupRef}>
          <div className="w-6/12">
            <ReactCrop
              src={imgOne}
              onImageLoaded={onLoadOne}
              crop={crop}
              onChange={c => setCrop(c)}
              onComplete={c => setCompleteCropOne(c)}
            />
            <div>
              <canvas
                ref={previewCanvasRefOne}
                className="hidden"
                style={{
                  width: completeCropOne?.width ?? 0,
                  height: completeCropOne?.height ?? 0
                }}
              />
            </div>
            <button
              onClick={() => {
                handleFinishCropOne();
              }}
            >
              Done
            </button>
          </div>
        </Popup>
        {/*
        =================================================================
        Crop Image Tow
        =================================================================
*/}
        <div
          className="absolute right-0 h-full"
          style={{ width: 'calc(50% - 2px)' }}
        >
          <label htmlFor="file-two" className="cursor-pointer">
            <ReusableDiv
              bgColor={!cropedImageTwo && 'c900'}
              rounded
              divHeight="100%"
            >
              <input
                id="file-two"
                type="file"
                accept="image/*"
                onChange={onSelectFileTwo}
                className="hidden"
              />
              {!cropedImageTwo && (
                <div className="text-center">
                  <div className="mx-auto mb-3 w-5/12">
                    <svg
                      fill="none"
                      height="86"
                      viewBox="0 0 90 86"
                      width="90"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        cliprole="evenodd"
                        d="M89.625 55.1209V71.2625C89.625 79.1507 82.9416 85.5 74.75 85.5H67.2712H67.2539H15.25C7.05845 85.5 0.375 79.1507 0.375 71.2625V14.7375C0.375 6.84928 7.05845 0.5 15.25 0.5H74.75C82.9416 0.5 89.625 6.84928 89.625 14.7375V55.1053C89.625 55.1105 89.625 55.1157 89.625 55.1209ZM85.3751 56.0507L65.3429 37.7934L45.3081 55.8704L68.2068 81.2498H74.7501C80.6418 81.2498 85.3751 76.7532 85.3751 71.2623V56.0507ZM85.375 50.3006V14.7375C85.375 9.24662 80.6417 4.75 74.75 4.75H15.25C9.35829 4.75 4.625 9.24662 4.625 14.7375V66.1414L29.3326 41.4955C30.1931 40.6372 31.5969 40.6741 32.4111 41.5765L42.461 52.7152L63.9264 33.3473C64.7382 32.6148 65.9733 32.6179 66.7814 33.3544L85.375 50.3006ZM62.4823 81.2495L30.7521 46.0818L4.6624 72.1063C5.11802 77.2064 9.66314 81.2495 15.2498 81.2495H62.4823ZM28.8097 28.9753C24.2841 28.9753 20.6133 25.3136 20.6133 20.7941C20.6133 16.2745 24.2841 12.6128 28.8097 12.6128C33.3353 12.6128 37.0061 16.2745 37.0061 20.7941C37.0061 25.3136 33.3353 28.9753 28.8097 28.9753ZM28.8097 24.7253C30.9905 24.7253 32.7561 22.964 32.7561 20.7941C32.7561 18.6241 30.9905 16.8628 28.8097 16.8628C26.629 16.8628 24.8633 18.6241 24.8633 20.7941C24.8633 22.964 26.629 24.7253 28.8097 24.7253Z"
                        fill="#92929D"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm opacity-50 md:my-5 font-bold">
                      Choice 2
                    </h2>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm leading-normal text-c500 mx-auto my-2">
                      click to upload your image
                    </p>
                  </div>
                </div>
              )}
              {cropedImageTwo && (
                <img
                  alt=""
                  src={cropedImageTwo}
                  className="absolute h-full w-full left-0 top-0 object-cover"
                />
              )}
            </ReusableDiv>
          </label>
        </div>
        <Popup ref={imgTwoPopupRef}>
          <ReactCrop
            src={imgTwo}
            onImageLoaded={onLoadTwo}
            crop={crop}
            onChange={c => setCrop(c)}
            onComplete={c => setCompleteCropTwo(c)}
          />
          <div>
            <canvas
              ref={previewCanvasRefTwo}
              className="hidden"
              style={{
                width: completeCropTwo?.width ?? 0,
                height: completeCropTwo?.height ?? 0
              }}
            />
          </div>
          <button
            onClick={() => {
              handleFinishCropTwo();
            }}
          >
            Selected
          </button>
        </Popup>
      </div>
      {/* &&&&&&&&&&&&&&&&&&&&&& Finish Upload Images Section &&&&&&&&&&&&&&&&&&&&&& */}
      <div
        className="my-5 mx-auto opacity-50"
        style={{ width: 'calc(100% - 2rem)' }}
      >
        <p className="text-black text-xs">
          it’s not recommended to make a poll with photos of your friends
          without thier consent. we will remove a poll, if it’s reporte.
          <a className="text-c200" href="/">
            Community Guidelines
          </a>
        </p>
      </div>
      <hr className="w-full text-c800 h-1" />
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
    </div>
  );
};
