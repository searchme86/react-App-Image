import React from 'react';

function Post() {
  return (
    <>
      <div>user profile / user name / insert_dt/ is_me (btn)</div>
      <div>contents</div>
      <div>img</div>
      <div>comment cnt</div>
    </>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: 'rohkorea86',
    user_profile:
      'https://blog.logrocket.com/wp-content/uploads/2021/09/build-instagram-infinite-scrolling-feed-react-query.png',
    image_url:
      ' https://blog.logrocket.com/wp-content/uploads/2021/09/build-instagram-infinite-scrolling-feed-react-query.png',
    contents: 'rohkorea네요',
    comment_cnt: 10,
    insert_dt: '2021-02-27 10:00:00',
  },
};

export default Post;
