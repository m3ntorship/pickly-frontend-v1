import React from 'react';
import { ReusableDiv } from './';

export default {
  title: 'components/Reusable Div',
  component: ReusableDiv
};

const svg = (
  <svg
    width="90"
    height="86"
    viewBox="0 0 90 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M89.625 55.1209V71.2625C89.625 79.1507 82.9416 85.5 74.75 85.5H67.2712H67.2539H15.25C7.05845 85.5 0.375 79.1507 0.375 71.2625V14.7375C0.375 6.84928 7.05845 0.5 15.25 0.5H74.75C82.9416 0.5 89.625 6.84928 89.625 14.7375V55.1053C89.625 55.1105 89.625 55.1157 89.625 55.1209ZM85.3751 56.0507L65.3429 37.7934L45.3081 55.8704L68.2068 81.2498H74.7501C80.6418 81.2498 85.3751 76.7532 85.3751 71.2623V56.0507ZM85.375 50.3006V14.7375C85.375 9.24662 80.6417 4.75 74.75 4.75H15.25C9.35829 4.75 4.625 9.24662 4.625 14.7375V66.1414L29.3326 41.4955C30.1931 40.6372 31.5969 40.6741 32.4111 41.5765L42.461 52.7152L63.9264 33.3473C64.7382 32.6148 65.9733 32.6179 66.7814 33.3544L85.375 50.3006ZM62.4823 81.2495L30.7521 46.0818L4.6624 72.1063C5.11802 77.2064 9.66314 81.2495 15.2498 81.2495H62.4823ZM28.8097 28.9753C24.2841 28.9753 20.6133 25.3136 20.6133 20.7941C20.6133 16.2745 24.2841 12.6128 28.8097 12.6128C33.3353 12.6128 37.0061 16.2745 37.0061 20.7941C37.0061 25.3136 33.3353 28.9753 28.8097 28.9753ZM28.8097 24.7253C30.9905 24.7253 32.7561 22.964 32.7561 20.7941C32.7561 18.6241 30.9905 16.8628 28.8097 16.8628C26.629 16.8628 24.8633 18.6241 24.8633 20.7941C24.8633 22.964 26.629 24.7253 28.8097 24.7253Z"
      fill="#92929D"
    />
  </svg>
);

const testChildren = {
  nom1: (
    <div className="grid grid-cols-1 text-center">
      <div className="mx-auto mb-5">{svg}</div>
      <div>
        <h2 className="text-md text-c300 font-bold">Choice 2</h2>
      </div>
      <div>
        <p className="text-sm w-2/3 leading-normal text-c500 mx-auto my-2">
          Drag and drop or click to upload your image
        </p>
      </div>
    </div>
  ),
  zoomIcon:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxsaW5lIHgxPSIyMSIgeDI9IjE2LjY1IiB5MT0iMjEiIHkyPSIxNi42NSIvPjxsaW5lIHgxPSIxMSIgeDI9IjExIiB5MT0iOCIgeTI9IjE0Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4='
};

// useing args
const Template = args => <ReusableDiv {...args} />;

export const PostDiv = Template.bind({});
PostDiv.args = {
  bgImage:
    'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
  divWidth: '300px',
  divHeight: '400px',
  smallRound: true
};

export const UploadDiv = Template.bind({});
UploadDiv.args = {
  bgColor: 'c800',
  divWidth: '300px',
  divHeight: '400px',
  rounded: true,
  children: testChildren.nom1
};

export const IconDivTest = Template.bind({});
IconDivTest.args = {
  bgColor: 'white',
  divWidth: '24px',
  divHeight: '24px',
  fullRound: true,
  withShadow: true,
  className:
    'cursor-pointer transform hover:scale-150 transition-all duration-300 ease-in-out',
  children: (
    <div>
      <img
        src="https://cdn1.iconfinder.com/data/icons/feather-2/24/zoom-in-512.png"
        alt=""
        style={{ width: '13px' }}
      />
    </div>
  )
};
