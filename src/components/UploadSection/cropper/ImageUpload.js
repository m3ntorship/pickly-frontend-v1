import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import ImageCropper from './ImageCropper';
import Popup from 'reactjs-popup';

const ImageUpload = () => {
  const [blob, setBlob] = useState(null);
  const [inputImg, setInputImg] = useState('');
  const [imageOneToUpload, setImageOneToUpload] = useState();

  const getBlob = blob => {
    // pass blob up from the ImageCropper component
    setBlob(blob);
  };
  const onInputChange = e => {
    // convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = e => {
    // upload blob to firebase 'images' folder with filename 'image'
    e.preventDefault();
    firebase
      .storage()
      .ref('images')
      .child('image')
      .put(blob, { contentType: blob.type })
      .then(() => {
        // redirect user
      });
  };
  return (
    <form onSubmit={handleSubmitImage}>
      <Popup
        trigger={
          <input
            id="file-one"
            type="file"
            accept="image/*"
            onChange={onInputChange}
          />
        }
        modal
      >
        <div className="relative" style={{ height: '500px', width: '600px' }}>
          {inputImg && (
            <ImageCropper
              getBlob={getBlob}
              inputImg={inputImg}
              className="h-full w-full"
            />
          )}
        </div>
        <button
          type="submit"
          onClick={() => {
            console.log('hi there!');
            console.log(blob.to());
          }}
        >
          Submit
        </button>
      </Popup>
    </form>
  );
};

export default ImageUpload;
