import React from 'react';
import styled from 'styled-components';

/* Config - imports */
//import COLORS from '@config/colors';
import SPACING from '../../config/spacing';

const Header = props => {
  function handleTitle() {
    if (props.title) return <StyledText>{props.title}</StyledText>;
    return props.showLogo;
  }

  return (
    <HeaderBar
      backgroundColor={props.backgroundColor}
      leftSide={props.leftSide}
      rightSide={props.rightSide}>
      {props.leftSide ? props.leftSide : <EmptyIcon />}
      {handleTitle()}
      {props.rightSide ? props.rightSide : <EmptyIcon />}
    </HeaderBar>
  );
};

const HeaderBar = styled.View`
  z-index: 100;
  width: 100%;
  height: 65;

  background-color: transparent;

  padding-left: ${props => (props.leftSide ? 0 : SPACING.large)};
  padding-right: ${props => (props.rightSide ? 0 : SPACING.large)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EmptyIcon = styled.View`
  z-index: 100;
  padding-top: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-bottom: ${SPACING.default};
  padding-left: ${SPACING.default};
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 25px;
`;

export default Header;
