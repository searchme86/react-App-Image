import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from './index.js';

function Input(props) {
  const { label, placeholder, _onChange } = props;
  return (
    <>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </>
  );
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

Input.defaultProps = {
  label: '텍스트',
  placeholder: '텍스트를 입력해주세요',
  _onChange: () => {},
};

export default Input;
