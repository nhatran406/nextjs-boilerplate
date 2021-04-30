/* eslint-disable react/prop-types */
import React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneNumber = props => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
    />
  );
};

export default PhoneNumber;
