import React, { useState, useCallback, useRef, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './styles.css';
import ImageUpload from './cropper/ImageUpload';
import ImageCropper from './cropper/ImageCropper';

export const ImageOne = () => {
  return (
    <div>
      <ImageUpload />
    </div>
  );
};
