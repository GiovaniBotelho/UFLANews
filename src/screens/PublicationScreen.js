import React from 'react';

/* Screens */
import Publication from '../components/presentational/Publication';

/* UseCases - import */
import {getNewsDetails} from '../useCases/publicationUseCases';

const PublicationScreen = props => {
  return (
    <Publication
      navigation={props.navigation}
      getPublication={getNewsDetails}
    />
  );
};

export default PublicationScreen;
