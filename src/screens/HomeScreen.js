import React from 'react';

/* Screens */
import Home from '../components/presentational/Home';

/* UseCases */
import {getPublications} from '../useCases/publicationUseCases';

const HomeScreen = props => {
  return (
    <Home navigation={props.navigation} getPublications={getPublications} />
  );
};

export default HomeScreen;
