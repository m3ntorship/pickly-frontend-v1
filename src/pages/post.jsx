import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import { UploadSection } from '../components/UploadSection';
import { Heading } from '../components/Heading';

export const Post = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <div className="bg-c900 py-3">
      <div className="container">
        <Heading
          as="p"
          fontSize="lg"
          fontWeight="medium"
          lineHeight="normal"
          textAlign="left"
          textColor="lightblack"
          className="my-2 inline-block"
        >
          Post Something
        </Heading>
        <UploadSection userImage={user.photoURL} />
      </div>
    </div>
  );
};
