import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';
import React, { useMemo } from 'react';

export interface HTMLNumericElement
  extends Omit<HTMLInputElement, 'value' | 'name'> {
  value: number | null | '';
  name?: string;
}

export type NumericInputProps = Omit<TextFieldProps, 'onChange'> & {
  value?: number | string;
  onChange?(e: React.ChangeEvent<HTMLNumericElement>): void;

  precision: number;
  thousandChar: string;
  decimalChar: string;
};

function verifyNumber(string: string) {
  const numericRepresentation = string.replace(/[,.]/g, '');

  return {
    isNumber: !isNaN(Number(numericRepresentation)),
    numberFomart: !isNaN(Number(numericRepresentation))
      ? Number(numericRepresentation)
      : null
  };
}

function NumericInput(props: NumericInputProps) {
  const { value, precision, thousandChar, decimalChar, ...inputProps } = props;
  const defaultValue = value === null ? NaN : Number(value);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      }),

    [thousandChar, decimalChar]
  );

  if (!decimalChar) {
    throw new Error('Decimal char should not be an empty string!');
  }
  if (!thousandChar) {
    throw new Error('Thousand char should not be an empty string!');
  }

  function format(number: number) {
    const result = formatter
      .format(number)
      .replace(',', decimalChar)
      .replaceAll('.', thousandChar);

    return result;
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ') e.preventDefault();

    if (
      e.ctrlKey ||
      e.shiftKey ||
      e.key === 'Backspace' ||
      e.key === 'Enter' ||
      e.key === 'Tab'
    )
      return;
    if (!verifyNumber(e.key).isNumber) e.preventDefault();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newEvent: React.ChangeEvent<HTMLNumericElement> = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        name: props.name,
        value: 0
      },
      target: {
        ...e.target,
        name: props.name,
        value: 0
      }
    };
    let numericRepresentation = e.target.value;

    numericRepresentation = numericRepresentation.replaceAll(thousandChar, '');
    numericRepresentation = numericRepresentation.replace(decimalChar, '');

    if (numericRepresentation === '') {
      e.target.value = '';
      newEvent.target.value = null;
      newEvent.currentTarget.value = null;
      return props.onChange && props.onChange(newEvent);
    }

    const { isNumber, numberFomart } = verifyNumber(numericRepresentation);
    if (isNumber && numberFomart !== null) {
      const withPrecision = numberFomart / 10 ** precision;

      const formattedNumber = format(withPrecision);

      newEvent.target.value = withPrecision;
      newEvent.currentTarget.value = withPrecision;

      e.target.value = formattedNumber;

      props.onChange && props.onChange(newEvent);
    }
  }

  const hasValue = value !== undefined;
  let inputDefaultValue;
  let inputValue;

  if (hasValue) {
    if (isNaN(defaultValue) || value === '') {
      inputValue = null;
    } else {
      inputValue = format(defaultValue);
    }
  }

  if (!hasValue && !isNaN(defaultValue)) {
    inputDefaultValue = format(defaultValue);
  }

  return (
    <TextField
      defaultValue={inputDefaultValue}
      {...inputProps}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={inputValue}
    />
  );
}

export default NumericInput;
