import React from 'react';

import Publisher from '../components/presentational/Publisher';

/* UseCases - import */
import {getNewsByPublisher} from '../useCases/publicationUseCases';

const PublisherScreen = props => {
  return <Publisher navigation={props.navigation} getNewsByPublisher={getNewsByPublisher}/>;
};

export default PublisherScreen;
