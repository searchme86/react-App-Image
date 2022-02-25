import React from 'react';
import styled from 'styled-components';

function Grid(props) {
  const { is_flex, width, margin, padding, bg, children } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };
  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
}

Grid.defaultProps = {
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  children: null,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding:${props.padding}` : '')}
  ${(props) => (props.margin ? `margin:${props.margin}` : '')}
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')}
  ${(props) =>
    props.is_flex
      ? `display:flex; align-itmes:center; justify-content:space-between;`
      : ''}
`;

export default Grid;