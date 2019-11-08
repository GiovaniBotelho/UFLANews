import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native';

/* Core - imports */
import Header from '../../core/Header';
import CommentBar from '../../core/CommentBar';
import CommentCard from '../../core/CommentCard';

/* Constatns */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const Comentarios = [
  {
    usuario: 'Pedro Pereke 007',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: '2 meses atrás',
    curtidas: 280,
    id: '1',
  },
  {
    usuario: 'Vinicius Spinelli',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: '2 minutos atrás',
    curtidas: 1,
    id: '2',
  },
  {
    usuario: 'Giovani Botelho',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: '2 dias atrás',
    curtidas: 29,
    id: '3',
  },
  {
    usuario: 'Rodrigão',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: 'poucos segundos',
    curtidas: 0,
    id: '4',
  },
  {
    usuario: 'Brenex',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: '1 hora atrás',
    curtidas: 150,
    id: '5',
  },
  {
    usuario: 'Paulo Afonso',
    comentario:
      'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    tempoEnvio: '15 minutos atrás',
    curtidas: 2,
    id: '6',
  },
];

const _keyExtractor = comment => comment.id;

const Comments = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        leftSide={
          <Icon
            name={'chevron-left'}
            size={25}
            onPress={() => {
              props.navigation.pop();
            }}
          />
        }
        showLogo={<TextComment>Comentários</TextComment>}
      />
      <FlatList
        data={Comentarios}
        renderItem={({item, index}) => <CommentCard comment={item} />}
        keyExtractor={_keyExtractor}
        ListFooterComponent={props => <FooterStyled />}
      />
      <CommentBar />
    </Container>
  );
};

const TextComment = styled.Text`
  font-size: 28}
`;

const Container = styled(LinearGradient)`
  flex: 1;
`;

const StyledView = styled.ScrollView`
  width: 100%;
`;

const FooterStyled = styled.View`
  padding-bottom: ${SPACING.medium};
`;

export default Comments;
