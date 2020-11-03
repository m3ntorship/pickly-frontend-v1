import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Feedback = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [value, setValue] = useState({
    val: '',
    msgError: ''
  });
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });
  const handleValidationInput = e => {
    if (e.target.value === '') {
      setValue({ val: value.val, msgError: 'You should put fkgfjg' });
    } else if (!value.val && value.msgError) {
      setValue({ val: e.target.value, msgError: '' });
    }
  };
  return (
    <div className="lg:relative lg:w-full bg-c900 pt-4 lg:pt-16 pb-2 flex">
      <div className="absolute lg:ml-8 hidden lg:block z-50">
        <img src="https://res.cloudinary.com/dhwuqox2w/image/upload/v1604419570/stars_i0_ordxth.svg" alt=""/>
      </div>
      <div className="w-full lg:absolute bg-c900 z-0 flex justify-center">
        <div className="w-full  nav__container capitalize lg:grid lg:grid-cols-2 inline-block">
          <div className="mt-16 lg:mt-2">
            <h1 className="text-xxlg font-xbold">
              Help us with
              <br />
              your feedback
            </h1>
            <p className="text-c500 mt-4">
              At elit leo dignissim volutpat sit.et amet enim, porttitor felis
            </p>
            <form className="mt-12 mb-12" method="post">
              <select className="w-full h-16 shadow-background text-c500 rounded-lg pl-4 text-md block">
                <option className="pt-1" value="category" defaultValue style={{
                  padding:"16px"
                }}>
                  Category
                </option>
                <option className="pt-1" value="problem1">
                  Problem.1
                </option>
                <option className="pt-1" value="problem2">
                  Problem.2
                </option>
                <option className="pt-1" value="problem3">
                  Problem.3
                </option>
              </select>
              <textarea
                onChange={handleValidationInput}
                defaultValue={value.val}
                className="mt-4 w-full h-16 shadow-background text-c500 rounded-lg pl-4 pt-4 resize-none block"
                type="text"
                placeholder="Problem"
                required
              ></textarea>
              <p className="text-c200">{value.msgError}</p>
              <button
                className={`mt-6 w-full h-12 lg:w-1/2 rounded-lg ${
                  !value.val ? 'bg-c500' : 'bg-c1100'
                } text-white font-bold`}
              >
                Send Your feedback
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img src="https://res.cloudinary.com/dhwuqox2w/image/upload/v1604419573/flame-1266_1_ttq8bp.svg" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
