import React from 'react';
import './index.css';

import NumericInput from 'material-ui-numeric-input';

const App = () => {
  return (
    <NumericInput
      name='example'
      precision='2'
      decimalSeparator=','
      thousandSeparator='.'
      label='Example'
      onChange={(value) => console.log(value)}
      variant='outlined'
    />
  );
};

export default App;
