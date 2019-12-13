import React from 'react';

/* Screens */
import Publication from '../components/presentational/Publication';

/* UseCases - import */
import {
  getNewsDetails,
  likeNews,
  unlikeNews,
  favoriteNews,
  unfavoriteNews,
} from '../useCases/publicationUseCases';

const PublicationScreen = props => {
  return (
    <Publication
      navigation={props.navigation}
      getPublication={getNewsDetails}
      likeNews={likeNews}
      unlikeNews={unlikeNews}
      favoriteNews={favoriteNews}
      unfavoriteNews={unfavoriteNews}
    />
  );
};

export default PublicationScreen;
