import React, { useRef, useState, useEffect } from 'react';
import { ReusableDiv } from '../DivWithCenterdChildren';
import { InputField } from '../InputField';
import { ToggleButton } from '../ToggleButton';
import { Button } from '../Button';
import { PICKLY } from '../../apis/clients';
import { useHistory } from 'react-router-dom';
import { OneImage } from './OneImage';
import Popup from 'reactjs-popup';
import cn from 'classnames';
import { ProgressBar } from '../uploading-bar';
export const UploadSection = ({ userImage }) => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [postAnonymously, setPostAnonymously] = useState(false);
  const [caption, setCaption] = useState('');
  const history = useHistory();
  const [imagesArr, setImagesArr] = useState([1, 1]);
  const [imageValidationErr, setImageValidationErr] = useState();
  const [isValid, setIsValid] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [captionValid, setCaptionValid] = useState(false);

  useEffect(() => {
    if (
      imagesToUpload.length !== 0 &&
      imagesToUpload.length < imagesArr.length
    ) {
      setIsValid(false);
      setImageValidationErr(`At least add ${imagesArr.length} Image`);
    } else {
      if (
        imagesToUpload.length !== 0 &&
        imagesToUpload.length === imagesArr.length
      ) {
        setIsValid(true);
        setImageValidationErr(null);
      }
    }

    if (caption) {
      setCaptionValid(true);
    } else {
      setCaptionValid(false);
    }
  }, [imagesToUpload, imagesArr, caption]);

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
    if (captionValid && isValid) {
      setShowResults(true);
      const form = new FormData();
      for (let img of imagesToUpload.slice(0, imagesArr.length)) {
        form.append('images', img);
      }
      form.append('caption', caption);
      form.append('isAnonymous', postAnonymously);
      const onUploadProgress = ProgressEvent => {
        const { loaded, total } = ProgressEvent;
        let precent = Math.floor((loaded * 100) / total);
        setProgress(precent);
      };

      PICKLY.createPost(form, onUploadProgress)
        .then(data => {
          console.log(data);
          history.push('/');
        })
        .catch(console.error);
    }
  };

  const setFun = image => {
    setImagesToUpload([...imagesToUpload, image]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid && captionValid) {
      postData();
    }
  };
  return (
    <div className="bg-white my-4 pt-4 rounded-lg shadow-lg relative mb-32">
      <form autocomplete="off" onSubmit={handleSubmit}>
        {showResults ? (
          <div
            className="absolute z-20 h-full w-full  flex justify-center items-center"
            style={{
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }}
          >
            <ProgressBar
              progress={progress}
              size={200}
              strokeWidth={25}
              circleOneStroke="#6741D9"
              circleTwoStroke="#6741D9"
            />
          </div>
        ) : null}
        <div
          style={{ width: 'calc(100% - 2rem)' }}
          className="mx-auto mb-5 relative"
        >
          <InputField
            caption={caption}
            onChange={handleInputChange}
            imageURL={userImage}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div style={{ width: 'fit-content' }}>
              <Button
                isRounded
                backgroundColor="White"
                color="SecondaryGrey"
                className="border-2 border-c800 relative"
              >
                <OptionsPopup clickFun={setImagesArrFun} />
              </Button>
            </div>
            <div>
              <ToggleButton
                selected={postAnonymously}
                toggleSelected={toggleSelected}
                title="Post anonymoslly"
              />
            </div>
          </div>
        </div>
        {imageValidationErr && (
          <div className="text-c200 text-xs mb-2 ml-2">
            {imageValidationErr}
          </div>
        )}
        <div className="container">
          <div
            className={cn('relative grid grid-cols-1 gap-1', {
              'sm:grid-cols-2': imagesArr.length > 1
            })}
          >
            {imagesArr.length > 1 && or}
            {imagesArr.map((img, index) => (
              <div key={index} className="relative">
                <OneImage
                  setFun={setFun}
                  id={index}
                  imagesNum={imagesArr.length}
                />
              </div>
            ))}
          </div>
        </div>
        {warningParagrapg}
        <hr className="w-full text-c800 h-1" />
        <PostButton
          type="submit"
          postData={postData}
          isValid={isValid}
          captionValid={captionValid}
        />
      </form>
    </div>
  );
};

// Helper components

const OptionsPopup = ({ clickFun }) => {
  const [currentOpt, setCurrentOpt] = useState('2 Images');
  const popupRef = useRef();
  const optionsList = [
    {
      option: '1 Image',
      num: 1
    },
    {
      option: '2 Images',
      num: 2
    },
    {
      option: '3 Images',
      num: 3
    },
    {
      option: '4 Images',
      num: 4
    }
  ];

  const contentStyle = {
    hieght: '50%',
    backgroundColor: '#fff'
  };

  return (
    <Popup
      ref={popupRef}
      trigger={
        <div className="relative py-2 px-4">
          <span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5 13.852V17.65C21.5 19.5061 19.9274 21 18 21H16.2403H16.2362H4C2.07258 21 0.5 19.5061 0.5 17.65V4.35C0.5 2.49395 2.07258 1 4 1H18C19.9274 1 21.5 2.49395 21.5 4.35V13.8483C21.5 13.8495 21.5 13.8508 21.5 13.852ZM20.5 14.0708L15.7866 9.77492L11.0725 14.0283L16.4604 20H18C19.3863 20 20.5 18.9419 20.5 17.65V14.0708ZM20.5 12.7178V4.35C20.5 3.05803 19.3863 2 18 2H4C2.61372 2 1.5 3.05803 1.5 4.35V16.445L7.31356 10.646C7.51602 10.444 7.84633 10.4527 8.0379 10.6651L10.4026 13.2859L15.4533 8.72878C15.6443 8.55643 15.9349 8.55716 16.125 8.73045L20.5 12.7178ZM15.1135 19.9999L7.64759 11.7251L1.50884 17.8485C1.61604 19.0486 2.68548 19.9999 4 19.9999H15.1135ZM7.19052 7.70007C6.12568 7.70007 5.26195 6.8385 5.26195 5.77507C5.26195 4.71164 6.12568 3.85007 7.19052 3.85007C8.25536 3.85007 9.11909 4.71164 9.11909 5.77507C9.11909 6.8385 8.25536 7.70007 7.19052 7.70007ZM7.19052 6.70007C7.70364 6.70007 8.11909 6.28565 8.11909 5.77507C8.11909 5.26449 7.70364 4.85007 7.19052 4.85007C6.67741 4.85007 6.26195 5.26449 6.26195 5.77507C6.26195 6.28565 6.67741 6.70007 7.19052 6.70007Z"
                fill="#92929D"
              />
              <path
                d="M21.5 17.65H21H21.5ZM18 21V21.5V21ZM21.5 13.8483H21L21 13.8501L21.5 13.8483ZM20.5 14.0708H21V13.85L20.8368 13.7012L20.5 14.0708ZM15.7866 9.77492L16.1234 9.40538L15.7883 9.09996L15.4516 9.4037L15.7866 9.77492ZM11.0725 14.0283L10.7376 13.6571L10.3664 13.9921L10.7013 14.3633L11.0725 14.0283ZM16.4604 20L16.0892 20.3349L16.2381 20.5H16.4604V20ZM18 20V20.5V20ZM20.5 17.65H20H20.5ZM20.5 12.7178L20.1632 13.0873L21 13.85V12.7178H20.5ZM1.5 16.445H1V17.65L1.85311 16.799L1.5 16.445ZM7.31356 10.646L7.66667 11L7.31356 10.646ZM8.0379 10.6651L7.66667 11L8.0379 10.6651ZM10.4026 13.2859L10.0314 13.6209L10.3663 13.9921L10.7375 13.6572L10.4026 13.2859ZM15.4533 8.72878L15.7882 9.1L15.4533 8.72878ZM16.125 8.73045L16.4618 8.36091L16.125 8.73045ZM15.1135 19.9999V20.4999H16.2381L15.4848 19.6649L15.1135 19.9999ZM7.64759 11.7251L8.01882 11.3902L7.66666 10.9999L7.29448 11.3711L7.64759 11.7251ZM1.50884 17.8485L1.15573 17.4945L0.989991 17.6599L1.01082 17.893L1.50884 17.8485ZM21 13.852V17.65H22V13.852H21ZM21 17.65C21 19.2084 19.6733 20.5 18 20.5V21.5C20.1816 21.5 22 19.8037 22 17.65H21ZM18 20.5H16.2403V21.5H18V20.5ZM16.2403 20.5H16.2362V21.5H16.2403V20.5ZM16.2362 20.5H4V21.5H16.2362V20.5ZM4 20.5C2.32674 20.5 1 19.2084 1 17.65H0C0 19.8037 1.81842 21.5 4 21.5V20.5ZM1 17.65V4.35H0V17.65H1ZM1 4.35C1 2.79157 2.32674 1.5 4 1.5V0.5C1.81842 0.5 0 2.19632 0 4.35H1ZM4 1.5H18V0.5H4V1.5ZM18 1.5C19.6733 1.5 21 2.79157 21 4.35H22C22 2.19632 20.1816 0.5 18 0.5V1.5ZM21 4.35V13.8483H22V4.35H21ZM21 13.8501C21 13.8501 21 13.8501 21 13.8502L22 13.8538C22 13.8514 22 13.8489 22 13.8465L21 13.8501ZM20.8368 13.7012L16.1234 9.40538L15.4498 10.1445L20.1632 14.4403L20.8368 13.7012ZM15.4516 9.4037L10.7376 13.6571L11.4075 14.3996L16.1215 10.1461L15.4516 9.4037ZM10.7013 14.3633L16.0892 20.3349L16.8317 19.665L11.4438 13.6934L10.7013 14.3633ZM16.4604 20.5H18V19.5H16.4604V20.5ZM18 20.5C19.6345 20.5 21 19.2453 21 17.65H20C20 18.6386 19.1382 19.5 18 19.5V20.5ZM21 17.65V14.0708H20V17.65H21ZM21 12.7178V4.35H20V12.7178H21ZM21 4.35C21 2.75469 19.6344 1.5 18 1.5V2.5C19.1382 2.5 20 3.36137 20 4.35H21ZM18 1.5H4V2.5H18V1.5ZM4 1.5C2.36558 1.5 1 2.75469 1 4.35H2C2 3.36137 2.86185 2.5 4 2.5V1.5ZM1 4.35V16.445H2V4.35H1ZM1.85311 16.799L7.66667 11L6.96045 10.292L1.14689 16.091L1.85311 16.799ZM7.66667 11H7.66667L8.40913 10.3301C8.02599 9.90546 7.36538 9.88809 6.96045 10.292L7.66667 11ZM7.66667 11L10.0314 13.6209L10.7738 12.951L8.40913 10.3301L7.66667 11ZM10.7375 13.6572L15.7882 9.1L15.1183 8.35755L10.0676 12.9147L10.7375 13.6572ZM15.7882 9.1V9.1L16.4618 8.36091C16.0815 8.01432 15.5003 8.01287 15.1183 8.35755L15.7882 9.1ZM15.7882 9.1L20.1632 13.0873L20.8368 12.3482L16.4618 8.36091L15.7882 9.1ZM15.4848 19.6649L8.01882 11.3902L7.27636 12.0601L14.7423 20.3348L15.4848 19.6649ZM7.29448 11.3711L1.15573 17.4945L1.86195 18.2025L8.0007 12.0791L7.29448 11.3711ZM1.01082 17.893C1.14297 19.3723 2.44861 20.4999 4 20.4999V19.4999C2.92235 19.4999 2.08911 18.7248 2.00685 17.804L1.01082 17.893ZM4 20.4999H15.1135V19.4999H4V20.4999ZM7.19052 7.20007C6.40085 7.20007 5.76195 6.56139 5.76195 5.77507H4.76195C4.76195 7.11561 5.85051 8.20007 7.19052 8.20007V7.20007ZM5.76195 5.77507C5.76195 4.98875 6.40085 4.35007 7.19052 4.35007V3.35007C5.85051 3.35007 4.76195 4.43453 4.76195 5.77507H5.76195ZM7.19052 4.35007C7.98019 4.35007 8.61909 4.98875 8.61909 5.77507H9.61909C9.61909 4.43453 8.53054 3.35007 7.19052 3.35007V4.35007ZM8.61909 5.77507C8.61909 6.56139 7.98019 7.20007 7.19052 7.20007V8.20007C8.53054 8.20007 9.61909 7.11561 9.61909 5.77507H8.61909ZM7.19052 7.20007C7.97816 7.20007 8.61909 6.56341 8.61909 5.77507H7.61909C7.61909 6.00789 7.42912 6.20007 7.19052 6.20007V7.20007ZM8.61909 5.77507C8.61909 4.98673 7.97816 4.35007 7.19052 4.35007V5.35007C7.42912 5.35007 7.61909 5.54225 7.61909 5.77507H8.61909ZM7.19052 4.35007C6.40289 4.35007 5.76195 4.98673 5.76195 5.77507H6.76195C6.76195 5.54225 6.95193 5.35007 7.19052 5.35007V4.35007ZM5.76195 5.77507C5.76195 6.56341 6.40289 7.20007 7.19052 7.20007V6.20007C6.95193 6.20007 6.76195 6.00789 6.76195 5.77507H5.76195Z"
                fill="#92929D"
              />
            </svg>
          </span>
          <span>{currentOpt}</span>
          <span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2"
            >
              <path
                d="M8.00003 7.99979C7.76638 8.00024 7.53994 7.91887 7.36003 7.76979L1.36003 2.76979C1.15581 2.60005 1.02739 2.35614 1.00301 2.09171C0.978631 1.82728 1.06029 1.564 1.23003 1.35979C1.39977 1.15557 1.64368 1.02715 1.90811 1.00277C2.17253 0.978387 2.43581 1.06005 2.64003 1.22979L8.00003 5.70979L13.36 1.38979C13.4623 1.30672 13.58 1.24469 13.7064 1.20726C13.8327 1.16983 13.9652 1.15773 14.0962 1.17167C14.2272 1.18561 14.3542 1.22531 14.4699 1.28848C14.5855 1.35166 14.6875 1.43706 14.77 1.53979C14.8616 1.64261 14.931 1.76324 14.9738 1.89411C15.0166 2.02498 15.0319 2.16328 15.0187 2.30035C15.0056 2.43741 14.9643 2.57028 14.8974 2.69064C14.8305 2.811 14.7395 2.91624 14.63 2.99979L8.63003 7.82979C8.44495 7.9553 8.22313 8.01516 8.00003 7.99979Z"
                fill="#92929D"
              />
            </svg>
          </span>
        </div>
      }
      position="bottom left"
      on="click"
      {...{ contentStyle }}
    >
      <div>
        {optionsList.map(({ option, num }) => {
          return (
            <div
              key={num}
              className="py-2 px-8 text-md hover:bg-c100 hover:text-white transition-all duration-100 cursor-pointer"
              onClick={() => {
                clickFun(num);
                setCurrentOpt(option);
                popupRef.current.close();
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

const PostButton = ({ postData, isValid, captionValid, type }) => {
  return (
    <div className="inline-block" style={{ width: 'calc(100% - 2rem)' }}>
      <Button
        type={type}
        backgroundColor={isValid && captionValid ? 'blue' : 'PrimaryGrey'}
        color="White"
        isRounded
        padding="big"
        className="font-semibold text-xs py-1 float-right my-2"
        handleClick={postData}
      >
        Post
      </Button>
    </div>
  );
};
