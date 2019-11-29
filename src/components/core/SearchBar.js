import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Constants */
import SPACING from '../../config/spacing';

const SearchBar = props => {
  return (
    <Container>
      <Icon name={'search'} size={25} style={{ flex: 1 }} />
      <TextInput placeholder={'Buscar'} value={props.value} onChangeText={props.setTextSearch}/>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1;
  border-radius: 30;
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
  margin-top: ${SPACING.medium};
  margin-bottom: ${SPACING.small};
`;

const TextInput = styled.TextInput`
  flex: 10;
  border-left-width: 1;
  padding-left: ${SPACING.medium};
  margin-left: ${SPACING.medium};
`;

export default SearchBar;
