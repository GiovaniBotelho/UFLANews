import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

/* Config - imports */
//import COLORS from '@config/colors';
import SPACING from '../../config/spacing';
import CONSTANTS from '../../config/constants';

const Header = props => {
  function handleTitle() {
    if (props.title) return <StyledText>{props.title}</StyledText>;
    return props.showLogo;
  }

  return (
    <HeaderBar backgroundColor={props.backgroundColor}>
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

  padding-left: ${SPACING.large};
  padding-right: ${SPACING.large};

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
  textAlign: center;
  fontSize: 25px;
`;

export default Header;
