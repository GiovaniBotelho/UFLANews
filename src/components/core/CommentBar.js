import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Components - import */
import Button from './Button';

/* Constants */
import SPACING from '../../config/spacing';
import COLORS from '../../config/colors';

const CommentBar = ({ addComment, newsId }) => {

  const [textComment, setTextComment] = useState("")

  return (
    <Container>
      <TextInput value={textComment} placeholder={'Adicione um comentário...'} onChangeText={setTextComment} multiline />
      <ContainerButtom>
        <Button width={'100%'} radius={0} title={'Publicar'} onClick={() => addComment(textComment, newsId)} />
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
  margin-bottom: ${SPACING.small};
`;

const ContainerButtom = styled.View`
  flex: 2;
`;

const TextInput = styled.TextInput`
  border-top-left-radius: 30;
  border-bottom-left-radius: 30;
  flex: 6;
  padding-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
  margin-top: ${SPACING.small};
  background-color: ${COLORS.white};
`;

export default CommentBar;
