import React from 'react';

import Favorites from '../components/presentational/Favorites';

const FavoritesScreen = props => {
  return (
    <>
      <Favorites navigation={props.navigation} />
    </>
  );
};

export default FavoritesScreen;
