# material-ui-numeric-input

> Numeric Input for interfaces built with Material-UI for React

[![NPM](https://img.shields.io/npm/v/material-ui-numeric-input.svg)](https://www.npmjs.com/package/material-ui-numeric-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## **Updates**

### 2.0.0

- Updated material-ui to version 5
- Removed styled-components in order to use material styled API
- Other packages updated

### 1.0.7

- Value prop now works as expected, like disabled inputs with calc.

### 1.0.6

- Input output value is now just a Number

### 1.0.5

- Value prop is now optional, the input have its own internal state
- Target output value is now a valid Number string

## **Install**

NPM

```bash
npm install --save material-ui-numeric-input
```

Yarn

```bash
yarn add material-ui-numeric-input
```

## **Usage**

Demo: https://sampaioleal.github.io/material-ui-numeric-input

```tsx
import React from 'react';
import NumericInput from 'material-ui-numeric-input';

function Example() {
  return (
    <NumericInput
      name='example'
      precision={3}
      decimalChar=','
      thousandChar='.'
      label='Example'
      onChange={(event) => console.log(event.target.value)}
      variant='outlined'
    />
  );
}
```

## **License**

MIT © [SampaioLeal](https://github.com/SampaioLeal)
