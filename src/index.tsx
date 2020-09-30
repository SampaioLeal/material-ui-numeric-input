import React from 'react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';

type Props = {
  value?: number;
  onChange?(
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
  minimumValue?: number;
  error?: boolean;
  helperText?: string;
  name?: string;
};
const InputNumerico: React.FC<Props> = (props) => {
  function changeValue(e: React.ChangeEvent<HTMLInputElement>): void {
    const number = e.target.value.split('.').join('').replace(',', '.');

    if (props.onChange) {
      if (props.minimumValue !== undefined) {
        if (parseFloat(number) < props.minimumValue) {
          setTimeout(() => {
            const event = e;
            event.target.value = props.minimumValue!.toString();
            props.onChange!(event);
          }, 100);
        } else {
          const event = e;
          event.target.value = number;
          props.onChange!(event);
        }
      } else {
        if (e.target.value !== '') {
          const event = e;
          event.target.value = number;
          props.onChange!(event);
        } else {
          setTimeout(() => {
            const event = e;
            event.target.value = '0';
            props.onChange!(event);
          }, 100);
        }
      }
    }
  }

  // TODO: make input multi variant
  // TODO: solve a problem that cursor goes back two characters
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
          value: props.value,
          disabled: props.disabled,
          onChangeEvent: changeValue,
          decimalSeparator: ',',
          thousandSeparator: '.',
          precision: props.precision,
          inputType: props.inputType,
          allowNegative: props.allowNegative
        }}
      />
      {props.error ? (
        <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
      ) : null}
    </Control>
  );
};

export default InputNumerico;

const Control = styled(FormControl)`
  .MuiInputLabel-shrink {
    transform: translate(13px, -5.5px) scale(0.75) !important;
  }
`;
