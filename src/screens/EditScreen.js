import React from 'react';

import Edit from '../components/presentational/Edit';
import { edit } from '../useCases/userUseCase';

const EditScreen = props => {
  return (
    <>
      <Edit navigation={props.navigation} edit={edit} />
    </>
  );
};

export default EditScreen;
