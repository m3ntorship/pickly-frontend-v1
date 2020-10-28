import React from 'react';
import { UploadSection } from './';

export default {
  title: 'sections/upload section',
  component: UploadSection
};

export const CropImageSection = () => {
  return (
    <UploadSection userImage="https://prestigeportraits.com/wp-content/uploads/2015/06/PortraitGallery_2Block-350x200-1-273x200.jpg" />
  );
};
