import React, { useState, useEffect } from 'react';
import { Button, BUTTON_OPTIONS } from '../Button/index';
import icon from './down-chevron.svg';
import { PICKLY } from '../../apis/clients';

export const FeedbackForm = () => {
  const [categories, setCategories] = useState(null);
  const [inputVal, setInputVal] = useState({ value: '', errorMsg: '' });
  const [length, setLength] = useState({ min: 5, max: 500, errMsg: '' });
  const [dropDownValue, setDropDownValue] = useState({
    value: '',
    status: false
  });
  const [feedbackNum,setFeedbackNum]=useState({val:0})

  useEffect(() => {
    PICKLY.getGategories()
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dropDownValue, inputVal.value, length]);

  const handleDropDown = () => {
    setDropDownValue({ ...dropDownValue, status: !dropDownValue.status });
  };
  const validationHandling = () => {
    if (inputVal.value === '' || dropDownValue.value === '') {
      setInputVal({ ...inputVal, errorMsg: 'Problem field needed' });
    }
  setFeedbackNum({val:feedbackNum.val+1})
   localStorage.setItem("num",feedbackNum.val)
  };
  const handleValueFromDropDown = e => {
    setDropDownValue({ value: e.target.innerHTML, status: false });
    console.log(dropDownValue.value);
  };
  return (
    <form
      className="relative mb-12 bg-c900"
      onSubmit={e => {
        e.preventDefault();
        PICKLY.sendFeedback({
          category: dropDownValue.value,
          body: inputVal.value
        })
          .then(res => {
            console.log(res);
            if (res.status === 201) {
              setInputVal({ value: '', errorMsg: '' });
              setDropDownValue({ ...dropDownValue, value: '' });
            }
          })
          .catch(err => {
            console.log(err);
            
          });
      }}
    >
      <div
        className="cursor-pointer absolute w-full h-16 flex justify-end"
        onClick={handleDropDown}
      >
        <input
          type="text"
          value={dropDownValue.value}
          readOnly
          placeholder="Category"
          className="cursor-pointer z-40 absolute w-full h-16 shadow-background text-c500 rounded-lg pl-4"
        />
        <div className="absolute w-16 h-16 text-c500 flex justify-center items-center z-40">
          <img src={icon} alt="" />
        </div>
      </div>
      <div>
        {dropDownValue.status ? (
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

            {/* <ul className=" mt-20 w-full">
                     <li 
                     onClick={handleValueFromDropDown}
                     className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem1</li>
                     <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem2</li>
                     <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem3</li>
                </ul>  */}
          </div>
        ) : null}
        <textarea
          onChange={e => {
            if (e.target.value.length < length.min) {
              setLength({
                ...length,
                errMsg: 'should msg between 5 to 500 character'
              });
            } else if (e.target.value.length >= length.min) {
              setLength({ ...length, errMsg: '' });
            }
            setInputVal({
              value: e.target.value,
              errorMsg: 'Problem field needed'
            });
          }}
          // minLength={length.min}
          maxLength={length.max}
          value={inputVal.value}
          className={`absolute  w-full h-16 shadow-background text-c500 rounded-lg pl-4 pt-4 resize-none block top-50 z-10`}
          type="text"
          placeholder="Problem"
          style={{ top: '6rem' }}
        ></textarea>
        {/* <p className="text-c200">{value.errorMsg}</p> */}
        <p
          className={`text-c200 ${inputVal.value ? 'invisible' : 'visible'}`}
          style={{ padding: '11rem 0 0 0' }}
        >
          {inputVal.errorMsg}
        </p>
        <p
          className={`text-c200 ${
            inputVal.value.length < length.errMsg ? 'invisible' : 'visible'
          }`}
        >
          {length.errMsg}
        </p>

        <div className="flex w-full h-full justify-center lg:justify-start">
          <Button
            handleClick={validationHandling}
            shadow={true}
            disabled={inputVal.value && dropDownValue.value && localStorage.getItem("num")<=4 ? false : true}
            isRounded={true}
            backgroundColor={
              inputVal.value &&
              inputVal.value.length >= length.min &&
              localStorage.getItem("num")<=4 &&
              inputVal.value.length &&
              dropDownValue.value
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
