import React from 'react';

import Edit from '../components/presentational/Edit';

const EditScreen = props => {
  return (
    <>
      <Edit navigation={props.navigation} />
    </>
  );
};

export default EditScreen;
