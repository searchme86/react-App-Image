import React from 'react';
import { Grid, Text, Button } from '../elements';

function Header(props) {
  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            test
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </>
  );
}

Header.defaultProps = {};
export default Header;
