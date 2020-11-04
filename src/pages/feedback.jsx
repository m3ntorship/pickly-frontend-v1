import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import { FeedbackForm } from "../components/FeedbackForm/index"

export const Feedback = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });
  return (
    <div className="lg:relative lg:w-full h-screen bg-c900 pt-4 lg:pt-16 pb-2 flex">
      <div className="absolute lg:ml-8 hidden lg:block z-50">
        <img src="https://res.cloudinary.com/dhwuqox2w/image/upload/v1604419570/stars_i0_ordxth.svg" alt=""/>
      </div>
      <div className="w-full lg:absolute bg-c900 z-0 flex justify-center items-start">
        <div className="w-full  nav__container capitalize lg:grid lg:grid-cols-2 inline-block">
          <div>
            <h1 className="text-xxlg font-xbold">
              Help us with
              <br />
              your feedback
            </h1>
            <p className="text-c500 mt-4">
              At elit leo dignissim volutpat sit.et amet enim, porttitor felis
            </p>
            <FeedbackForm />
          </div>
          <div className="hidden lg:block">
            <img src="https://res.cloudinary.com/dhwuqox2w/image/upload/v1604419573/flame-1266_1_ttq8bp.svg" className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
