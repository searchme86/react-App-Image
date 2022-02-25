import React from 'react';
import { Grid, Image, Text } from '../elements';

function Post(props) {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.user_info.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.user_info.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.user_info.comment_cnt}개</Text>
        </Grid>
      </Grid>
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
