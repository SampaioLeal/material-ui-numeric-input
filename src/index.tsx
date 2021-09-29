import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';

type Props = {
  value?: number;
  onChange(value: number): void;
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
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;

  decimalSeparator: string;
  thousandSeparator: string;

  variant?: 'standard' | 'outlined' | 'filled';
};
const NumericInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = Number(
      e.target.value
        .split(props.thousandSeparator)
        .join('')
        .replace(props.decimalSeparator, '.')
    );

    setValue(newValue);
    props.onChange(newValue);
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
            value: props.value || value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
          endAdornment={props.endAdornment}
          startAdornment={props.startAdornment}
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
            value: props.value || value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
          endAdornment={props.endAdornment}
          startAdornment={props.startAdornment}
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
      <FormControl error={props.error} fullWidth>
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
            value: props.value || value,
            disabled: props.disabled,
            onChangeEvent: handleChange,
            decimalSeparator: props.decimalSeparator,
            thousandSeparator: props.thousandSeparator,
            precision: props.precision,
            inputType: props.inputType,
            allowNegative: props.allowNegative
          }}
          endAdornment={props.endAdornment}
          startAdornment={props.startAdornment}
        />
        {props.error ? (
          <FormHelperText error={props.error}>
            {props.helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  }
};

export default NumericInput;
