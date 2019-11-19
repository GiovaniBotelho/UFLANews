import React from 'react';

/* Screens */
import Publishers from '../components/presentational/Publishers';

/* Constants */
import {getPublishers} from '../useCases/publisherUseCases';

const PublishersScreen = props => {
  return (
    <Publishers navigation={props.navigation} getPublishers={getPublishers} />
  );
};

export default PublishersScreen;
