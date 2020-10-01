# material-ui-numeric-input

> Numeric Input for interfaces built with Material-UI for React

[![NPM](https://img.shields.io/npm/v/material-ui-numeric-input.svg)](https://www.npmjs.com/package/material-ui-numeric-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

**NPM**

```bash
npm install --save material-ui-numeric-input
```

**Yarn**

```bash
yarn add material-ui-numeric-input
```

## Usage

```tsx
import React from 'react';
import NumericInput from 'material-ui-numeric-input';

function Example() {
  return (
    <NumericInput
      value={10000}
      name='example'
      precision='2'
      decimalSeparator=','
      thousandSeparator='.'
      label='Example'
      onChange={(e) => console.log(e.target.value)}
      variant='outlined'
    />
  );
}
```

## License

MIT © [SampaioLeal](https://github.com/SampaioLeal)
