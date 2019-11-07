import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Constants */
import SPACING from '../../config/spacing';
import Button from './Button';

const PublishBar = props => {
  return (
    <Container>
      <TextInput placeholder={'Adicione um comentário...'} multiline />
      <ContainerButtom>
        <Button width={'100%'} radius={0} title={'Publicar'}/>
      </ContainerButtom>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  margin-left: ${SPACING.small};
  margin-right: ${SPACING.small};
  margin-top: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
`;

const ContainerButtom = styled.View
`
flex:2;
`

const TextInput = styled.TextInput`
  border-width: 1;
  border-top-left-radius: 30;
  border-bottom-left-radius: 30;
  flex: 6;
  padding-right: ${SPACING.small};
  padding-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
`;

export default PublishBar;
