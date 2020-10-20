import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import Popup from 'reactjs-popup';
import getCroppedImg from './cropImage';

const NewUploadSection = () => {
  return (
    <div className="w-full h-full my-2">
      <Popup
        trigger={() => {
          return <button> open Popup </button>;
        }}
        modal
      >
        <CropImage />
      </Popup>
    </div>
  );
};

const CropImage = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <div className="crop-image absolute top-0 left-0 right-0 bottom-0">
      <div className="crop-container absolute top-0 left-0 right-0 bottom-0">
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={3 / 4}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
    </div>
  );
};

export default NewUploadSection;
