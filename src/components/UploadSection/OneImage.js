import React, { useState, useCallback, useRef } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from 'react-easy-crop';
import Popup from 'reactjs-popup';
import { ReusableDiv } from '../DivWithCenterdChildren';
import getCroppedImg from './cropImage';

export const OneImage = ({ setFun, id }) => {
  const [img, setImg] = useState(null);
  const [cropedImage, setCropedImage] = useState(null);
  const imgPopupRef = useRef();

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImg(reader.result);
        openimgPopup();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const openimgPopup = () => imgPopupRef.current.open();
  const closeimgPopup = () => imgPopupRef.current.close();

  return (
    <div>
      <div>
        <label htmlFor="file-One" className="cursor-pointer">
          <ReusableDiv
            bgColor={!cropedImage && 'c900'}
            rounded
            divHeight="100%"
          >
            <input
              id="file-One"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              className="hidden"
            />
            {!cropedImage && (
              <div className="text-center">
                <div className="mx-auto mb-3 w-5/12">{imageIcon}</div>
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
            {cropedImage && (
              <img alt="" src={cropedImage} className="max-w-full max-h-full" />
            )}
          </ReusableDiv>
        </label>
      </div>
      <CropPopup
        img={img}
        setCropedImage={setCropedImage}
        closeimgPopup={closeimgPopup}
        imgPopupRef={imgPopupRef}
        setFun={setFun}
      />
    </div>
  );
};

// Helper Components
const imageIcon = (
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
);

const CropPopup = ({
  img,
  setCropedImage,
  imgPopupRef,
  setFun,
  closeimgPopup
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const cropedImage = await getCroppedImg(img, croppedAreaPixels);
      setCropedImage(cropedImage);
      setFun(new File([cropedImage], 'nile', { type: 'image/jpeg' }));
      closeimgPopup();
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <Popup ref={imgPopupRef} className="my-20">
      <div className="relative w-full" style={{ height: '80%' }}>
        <Cropper
          image={img}
          crop={crop}
          zoom={zoom}
          aspect={3 / 4}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          className="w-48"
        />
      </div>
      <button
        onClick={() => {
          showCroppedImage();
        }}
      >
        Done
      </button>
    </Popup>
  );
};
