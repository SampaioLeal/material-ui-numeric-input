import React from 'react';
import './index.css';

import NumericInput from 'material-ui-numeric-input';

const App = () => {
  return (
    <NumericInput
      value={'123.0'}
      name='example'
      precision={3}
      decimalChar=','
      thousandChar='.'
      label='Example'
      onChange={(event) => console.log(event.target.value)}
      variant='outlined'
    />
  );
};

export default App;
