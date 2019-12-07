import React from 'react';

import Publisher from '../components/presentational/Publisher';

/* UseCases - import */
import {getNewsByPublisher, subscribePublisher, unsubscribePublisher} from '../useCases/publisherUseCases';

const PublisherScreen = props => {
  return (
    <Publisher
      navigation={props.navigation}
      getNewsByPublisher={getNewsByPublisher}
      subscribe={subscribePublisher}
      unsubscribe={unsubscribePublisher}
    />
  );
};

export default PublisherScreen;
