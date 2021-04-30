/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

import {
  SigleOption,
  MultilineOption,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
  Menu,
  IndicatorsContainer,
} from './selectionComponents';

const ReactSelect = props => {
  const components = {
    Control,
    NoOptionsMessage,
    Placeholder,
    SingleValue,
    MultiValue,
    ValueContainer,
    Menu,
    IndicatorsContainer,
  };
  const classes = useStyles();
  const {
    className,
    required,
    isMulti,
    options,
    placeholder,
    label,
    value,
    onChange,
    isSecondaryText,
    secondaryField,
    error,
    helperText,
    ...rest
  } = props;
  const selectStyles = {
    option: base => ({
      ...base,
      borderBottom: '1px dotted pink',
      color: 'red' || 'blue',
      padding: 20,
    }),
    input: base => ({
      ...base,
      color: '#0d6cc2',
    }),
  };
  return (
    <Select
      className={className}
      placeholder={placeholder || 'Search...'}
      textFieldProps={{
        label,
        InputLabelProps: {
          shrink: true,
        },
      }}
      error={error}
      helperText={helperText}
      isRequired={required || false}
      isMulti={isMulti}
      isClearable
      secondaryField={secondaryField}
      components={
        isSecondaryText
          ? { ...components, Option: MultilineOption }
          : { ...components, Option: SigleOption }
      }
      classes={classes}
      styles={selectStyles}
      options={options}
      value={value}
      onChange={onChange}
      loadingMessage={() => <Typography>Bạn chờ chút nhé...</Typography>}
      {...rest}
    />
  );
};

ReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default ReactSelect;
