import React from 'react';

import FavoritePublications from '../components/presentational/FavoritePublications';

/* Constants */
import {getFavoritePublications} from '../useCases/publicationUseCases';

const FavoritePublicationsScreen = props => {
  return (
    <>
      <FavoritePublications navigation={props.navigation} getFavoritePublications={getFavoritePublications}/>
    </>
  );
};

export default FavoritePublicationsScreen; 
