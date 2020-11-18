import React, { useState, useEffect } from 'react';
import { Button, BUTTON_OPTIONS } from '../Button/index';
import icon from './down-chevron.svg';
import { PICKLY } from '../../apis/clients';

export const FeedbackForm = () => {
  const min = 5,
    max = 500;
  const [categories, setCategories] = useState(null);

  //inputval for textbox value
  const [inputVal, setInputVal] = useState('');
  //inputValErrMsg for error msg Who display errMsg if inputVal is empty after change
  const [inputValErrMsg, setInputValErrMsg] = useState('');

  const [lengthErrMsg, setLengthErrMsg] = useState('');

  const [dropDownValue, setDropDownValue] = useState('');
  const [dropDownOpened, setDropDownOpened] = useState(false);

  useEffect(() => {
    PICKLY.getGategories()
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dropDownValue, dropDownOpened, inputVal, lengthErrMsg]);

  const handleDropDown = () => {
    setDropDownOpened(!dropDownOpened);
  };
  const validationHandling = () => {
    if (inputVal === '' || dropDownValue === '') {
      setInputVal({ ...inputVal, errorMsg: 'Problem field needed' });
    }
  };
  const handleValueFromDropDown = e => {
    setDropDownValue(e.target.innerHTML);
    setDropDownOpened(false);
  };

  return (
    <form
      className="relative mb-12 bg-c900"
      onSubmit={e => {
        e.preventDefault();
        PICKLY.sendFeedback({
          category: dropDownValue,
          body: inputVal
        })
          .then(res => {
            console.log(res);
            setInputVal('');
            setDropDownValue('');
          })
          .catch(err => {
            console.log(err.status);
            setInputVal('');
            setDropDownValue('');
          });
      }}
    >
      <div
        className="cursor-pointer absolute w-full h-16 flex justify-end"
        onClick={handleDropDown}
      >
        <input
          type="text"
          value={dropDownValue}
          readOnly
          placeholder="Category"
          className="cursor-pointer z-40 absolute w-full h-16 shadow-background text-c500 rounded-lg pl-4"
        />
        <div className="absolute w-16 h-16 text-c500 flex justify-center items-center z-40">
          <img src={icon} alt="" />
        </div>
      </div>
      <div>
        {dropDownOpened ? (
          <div className={`absolute shadow-xl text-c500 w-full z-30 bg-white`}>
            <ul className=" mt-20 w-full">
              {categories
                ? categories.data.map((categorie, id) => {
                    return (
                      <div key={id}>
                        <li
                          onClick={handleValueFromDropDown}
                          className="cursor-pointer pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black"
                        >
                          {categorie.title}
                        </li>
                      </div>
                    );
                  })
                : null}
            </ul>
          </div>
        ) : null}
        <textarea
          onChange={e => {
            if (e.target.value.length < min) {
              setLengthErrMsg('should msg between 5 to 500 character');
            } else if (e.target.value.length >= min) {
              setLengthErrMsg('');
            }
            setInputVal(e.target.value);
            setInputValErrMsg('Problem field needed');
          }}
          maxLength={max}
          value={inputVal}
          className={`absolute  w-full h-16 shadow-background text-c500 rounded-lg pl-4 pt-4 resize-none block top-50 z-10`}
          type="text"
          placeholder="Problem"
          style={{ top: '6rem' }}
        ></textarea>
        {/* <p className="text-c200">{value.errorMsg}</p> */}
        <p
          className={`text-c200 ${inputVal ? 'invisible' : 'visible'}`}
          style={{ padding: '11rem 0 0 0' }}
        >
          {inputValErrMsg}
        </p>
        <p
          className={`text-c200 ${
            inputVal.length < lengthErrMsg ? 'invisible' : 'visible'
          }`}
        >
          {lengthErrMsg}
        </p>

        <div className="flex w-full h-full justify-center lg:justify-start">
          <Button
            handleClick={validationHandling}
            shadow={true}
            disabled={inputVal && dropDownValue ? false : true}
            isRounded={true}
            backgroundColor={
              inputVal &&
              inputVal.length >= min &&
              inputVal.length &&
              dropDownValue
                ? BUTTON_OPTIONS.BACKGROUND_COLOR.Blue
                : BUTTON_OPTIONS.BACKGROUND_COLOR.SecondaryGrey
            }
            color={BUTTON_OPTIONS.COLOR.White}
            padding={BUTTON_OPTIONS.PADDING.BIG}
          >
            Send Your Feedback
          </Button>
        </div>
      </div>
    </form>
  );
};
