import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';

interface HTMLNumericElement extends Omit<HTMLInputElement, 'value'> {
  value: number | null;
}

type NumericInputProps = import('@mui/material').TextFieldProps & {
  value?: number | string;
  onChange(e: React.ChangeEvent<HTMLNumericElement>): void;

  precision: number;
  thousandChar: string;
  decimalChar: string;
};

function isNumber(string: string) {
  return !isNaN(Number(string));
}

function NumericInput(props: NumericInputProps) {
  const { value, precision, thousandChar, decimalChar, ...inputProps } = props;
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
    if (e.ctrlKey || e.shiftKey || e.key === 'Backspace' || e.key === 'Enter')
      return;
    if (!isNumber(e.key)) e.preventDefault();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newEvent: React.ChangeEvent<HTMLNumericElement> = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        value: 0
      },
      target: {
        ...e.target,
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

    if (isNumber(numericRepresentation)) {
      const withPrecision = +numericRepresentation / 10 ** precision;
      const formattedNumber = format(withPrecision);

      newEvent.target.value = withPrecision;
      newEvent.currentTarget.value = withPrecision;

      e.target.value = formattedNumber;

      props.onChange && props.onChange(newEvent);
    }
  }

  return (
    <TextField
      {...inputProps}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
}

export default NumericInput;
