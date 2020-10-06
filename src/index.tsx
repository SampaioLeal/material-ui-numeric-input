import React, { useState } from 'react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Input,
  FilledInput
} from '@material-ui/core';

type Props = {
  value?: number;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  onBlur?(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  precision: string;
  label: string;
  disabled?: boolean;
  id?: string;
  inputType?: string;
  allowNegative?: boolean;
  error?: boolean;
  helperText?: string;
  name?: string;

  decimalSeparator: string;
  thousandSeparator: string;

  variant?: 'standard' | 'outlined' | 'filled';
};
const NumericInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState(props.value || 0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value
      .split(props.thousandSeparator)
      .join('')
      .replace(props.decimalSeparator, '.');

    setValue(Number(newValue));
    e.target.value = newValue;

    props.onChange(e);
  }

  if (!props.variant || props.variant === 'standard') {
    return (
      <FormControl error={props.error} fullWidth>
        <InputLabel error={props.error} shrink id={props.label}>
          {props.label}
        </InputLabel>
        <Input
          name={props.name}
          error={props.error}
          fullWidth
          inputComponent={CurrencyInput}
          disabled={props.disabled}
          onBlur={props.onBlur}
          inputProps={{
            id: props.id,
            value: value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
        />
        {props.error ? (
          <FormHelperText error={props.error}>
            {props.helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  } else if (props.variant === 'filled') {
    return (
      <FormControl error={props.error} fullWidth>
        <InputLabel error={props.error} shrink id={props.label}>
          {props.label}
        </InputLabel>
        <FilledInput
          name={props.name}
          error={props.error}
          fullWidth
          inputComponent={CurrencyInput}
          disabled={props.disabled}
          onBlur={props.onBlur}
          inputProps={{
            id: props.id,
            value: value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
        />
        {props.error ? (
          <FormHelperText error={props.error}>
            {props.helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  } else {
    return (
      <Control error={props.error} fullWidth>
        <InputLabel error={props.error} shrink id={props.label}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          name={props.name}
          error={props.error}
          notched
          label={props.label}
          fullWidth
          inputComponent={CurrencyInput}
          disabled={props.disabled}
          onBlur={props.onBlur}
          inputProps={{
            id: props.id,
            value: value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
        />
        {props.error ? (
          <FormHelperText error={props.error}>
            {props.helperText}
          </FormHelperText>
        ) : null}
      </Control>
    );
  }
};

export default NumericInput;

const Control = styled(FormControl)`
  .MuiInputLabel-shrink {
    transform: translate(13px, -5.5px) scale(0.75) !important;
  }
`;
