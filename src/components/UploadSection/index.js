import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Popup from 'reactjs-popup';
import { ReusableDiv } from '../DivWithCenterdChildren';
import { InputField } from '../InputField';

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

export const UploadSection = () => {
  // crop image states =============
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 3.45 / 4.6
  });
  const [completeCropOne, setCompleteCropOne] = useState(null);
  const [completeCropTwo, setCompleteCropTwo] = useState(null);
  const [imgOne, setImgOne] = useState(null);
  const [imgTwo, setImgTwo] = useState(null);
  const previewCanvasRefOne = useRef(null);
  const [cropedImageOne, setCropedImageOne] = useState(null);
  const [cropedImageTwo, setCropedImageTwo] = useState(null);
  const previewCanvasRefTwo = useRef(null);
  const imgOnePopupRef = useRef();
  const imgTwoPopupRef = useRef();
  const imgOneRef = useRef();
  const imgTwoRef = useRef();

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
    const image = previewCanvasRefOne.current.toDataURL('image/jpeg', 1);
    setCropedImageOne(image);
  };

  const handleFinishCropTwo = () => {
    closeImgTwoPopup();
    const image = previewCanvasRefTwo.current.toDataURL('image/jpeg', 1);
    setCropedImageTwo(image);
  };

  return (
    <div
      className="mx-auto my-auto rounded-lg"
      style={{ width: 'fit-content' }}
    >
      <div className="relative">
        <InputField />
        {/* Here is the OR centerd component */}
        <div
          className="absolute"
          style={{ left: '332px', top: '220px', width: 'fitContent' }}
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
        {/* Upload Image One */}
        <div className="grid grid-cols-2 gap-1">
          <div className="inline-block">
            <div>
              <input
                id="file-Two"
                type="file"
                accept="image/*"
                onChange={onSelectFileOne}
                className="hidden"
              />
              <ReusableDiv
                bgColor={!cropedImageOne && 'c800'}
                bgImage={cropedImageOne}
                rounded
                divHeight="460px"
                divWidth="345px"
              >
                {!cropedImageOne && (
                  <div className="grid grid-cols-1 text-center">
                    <div className="mx-auto mb-5">
                      <svg
                        fill="none"
                        height="86"
                        viewBox="0 0 90 86"
                        width="90"
                        xmlns="http://www.w3.org/2000/svg"
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
                      <h2 className="text-md text-c300 font-bold">Choice 2</h2>
                    </div>
                    <div>
                      <label htmlFor="file-Two" className="cursor-pointer">
                        <p className="text-sm w-2/3 leading-normal text-c500 mx-auto my-2">
                          Drag and drop or click to upload your image
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </ReusableDiv>
            </div>
            <Popup ref={imgOnePopupRef}>
              <div>
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
                  Selected
                </button>
              </div>
            </Popup>
          </div>
          {/*
 =================================================================
 Crop Image Tow
 =================================================================
*/}
          {/* Upload Image Two */}
          <div className="inline-block">
            <div>
              <input
                id="file-one"
                type="file"
                accept="image/*"
                onChange={onSelectFileTwo}
                className="hidden"
              />
              <ReusableDiv
                bgColor={!cropedImageTwo && 'c800'}
                bgImage={cropedImageTwo}
                rounded
                divHeight="460px"
                divWidth="345px"
              >
                {!cropedImageTwo && (
                  <div className="grid grid-cols-1 text-center">
                    <div className="mx-auto mb-5">
                      <svg
                        fill="none"
                        height="86"
                        viewBox="0 0 90 86"
                        width="90"
                        xmlns="http://www.w3.org/2000/svg"
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
                      <h2 className="text-md text-c300 font-bold">Choice 2</h2>
                    </div>
                    <div>
                      <label htmlFor="file-one" className="cursor-pointer">
                        <p className="text-sm w-2/3 leading-normal text-c500 mx-auto my-2">
                          Drag and drop or click to upload your image
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </ReusableDiv>
            </div>
            <Popup ref={imgTwoPopupRef}>
              <div>
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
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};
