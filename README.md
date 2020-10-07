# material-ui-numeric-input

> Numeric Input for interfaces built with Material-UI for React

[![NPM](https://img.shields.io/npm/v/material-ui-numeric-input.svg)](https://www.npmjs.com/package/material-ui-numeric-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## **Updates**

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

## **License**

MIT © [SampaioLeal](https://github.com/SampaioLeal)
