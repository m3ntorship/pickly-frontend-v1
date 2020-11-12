import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../components/PostSection';
import { PICKLY } from '../apis/clients';

export const SinglePost = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    PICKLY.getPostById(id).then(res => setData(res.data.data));
  }, [id]);

  const voteSinglePost = data => {
    setData(data);
  };

  return (
    <div className="bg-c800 h-screen pt-10">
      <div className="container">
        {data && (
          <PostSection
            voted={data.Voted}
            _id={data._id}
            images={data.resources.images}
            popupActionOptions={[0]}
            postCaption={data.caption}
            postDate={data.createdAt}
            shareUrl={window.location.href}
            userImage="https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            userName={data.author && data.author.name}
            isAnonymous={data.isAnonymous}
            updateSinglePostData={voteSinglePost}
            ownedByCurrentUser={data.ownedByCurrentUser}
          />
        )}
      </div>
    </div>
  );
};
