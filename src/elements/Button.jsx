import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const { text, _onClick } = props;

  return (
    <>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </>
  );
}

Button.defaultProps = {
  text: '텍스트',
  _onClick: () => {},
};

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #fff;
  padding: 12px 0;
  box-sizing: border-box;
  border: none;
`;

export default Button;
