import React from 'react';
import './index.css';

import NumericInput from 'material-ui-numeric-input';

const App = () => {
  return (
    <NumericInput
      value={10000}
      name='example'
      precision='2'
      decimalSeparator=','
      thousandSeparator='.'
      label='Example'
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default App;
