import React, { useState } from 'react';
import './index.css';

import NumericInput from 'material-ui-numeric-input';

const App = () => {
  const [number, setNumber] = useState('0');

  return (
    <NumericInput
      value={Number(number)}
      name='example'
      precision='2'
      label='Example'
      onChange={(e) => setNumber(e.target.value)}
    />
  );
};

export default App;
