import React from 'react';

/* Screens */
import Publishers from '../components/presentational/Publishers';

/* Constants */
import {getPublishersSubscriptions} from '../useCases/publisherUseCases';

const SubscriptionsScreen = props => {
  return (
    <Publishers navigation={props.navigation} getPublishers={getPublishersSubscriptions} />
  );
};

export default SubscriptionsScreen;
