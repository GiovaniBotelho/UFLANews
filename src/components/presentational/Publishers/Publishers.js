import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

/* Utils - import */
import {removeAccents} from '../../../utils/help';

/* Core - imports */
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import PublisherCard from '../../core/PublisherCard';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const _keyExtractor = publisher => publisher.id.toString();

const Publisher = ({navigation, getPublishers}) => {
  const [textSearch, setTextSearch] = useState('');
  const dispatch = useDispatch();
  const {publishers, isLoading} = useSelector(({publishers}) => publishers);

  useEffect(() => {
    dispatch(getPublishers());
  }, []);

  const handleSearch = () => {
    return removeAccents(textSearch.toUpperCase())
      .split(' ')
      .reduce((acc, keyWord) => {
        return acc.filter(pub =>
          removeAccents(pub.nome.toUpperCase()).includes(keyWord),
        );
      }, publishers);
  };

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Publicadores'}
        rightSide={
          <StyledTouchableOpacity
            onPress={() => navigation.navigate('MyAccount')}>
            <Icon name={'user'} size={25} />
          </StyledTouchableOpacity>
        }
        leftSide={
          <StyledTouchableOpacity onPress={() => navigation.pop()}>
            <Icon name={'chevron-left'} size={25} />
          </StyledTouchableOpacity>
        }
      />
      <SearchBar value={textSearch} setTextSearch={setTextSearch} />
      <FlatList
        style={{marginTop: SPACING.medium}}
        data={handleSearch()}
        renderItem={({item, index}) => (
          <PublisherCard publisher={item} navigation={navigation} />
        )}
        refreshing={isLoading}
        onRefresh={() => dispatch(getPublishers())}
        keyExtractor={_keyExtractor}
        ListFooterComponent={props => <FooterStyled />}
      />
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
`;

const FooterStyled = styled.View`
  padding-bottom: ${SPACING.medium};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Publisher;
