/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import {
  Typography,
  TextField,
  Paper,
  Chip,
  MenuItem,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { components } from 'react-select';

const NoOptionsMessage = props => {
  const { selectProps, children, innerProps } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
};

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
};

const Control = props => {
  const { selectProps, innerRef, children, innerProps } = props;
  const { textFieldProps } = selectProps;
  if (!textFieldProps.label.includes('*')) {
    textFieldProps.label = props.selectProps.isRequired
      ? `${textFieldProps.label} *`
      : `${textFieldProps.label}`;
  }
  return (
    <TextField
      fullWidth
      error={selectProps.error || false}
      helperText={selectProps.helperText || ''}
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...textFieldProps}
    />
  );
};

const SigleOption = props => {
  const {
    children,
    selectProps,
    innerProps,
    innerRef,
    isFocused,
    isSelected,
  } = props;
  const { onMouseMove, onMouseOver, ...newInnerProps } = innerProps;
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      className={isSelected ? selectProps.classes.menu : null}
      style={{
        fontWeight: isSelected ? 600 : 400,
      }}
      {...newInnerProps}
    >
      {children}
    </MenuItem>
  );
};

const MultilineOption = props => {
  const {
    children,
    selectProps,
    innerProps,
    innerRef,
    isFocused,
    isSelected,
    data,
  } = props;
  return (
    <ListItem
      dense
      button
      buttonRef={innerRef}
      selected={isFocused}
      className={isSelected ? selectProps.classes.menu : null}
      {...innerProps}
    >
      <ListItemText
        className={isSelected ? selectProps.classes.menu : null}
        primary={children}
        secondary={
          selectProps.secondaryField ? data[selectProps.secondaryField] : ''
        }
      />
    </ListItem>
  );
};

const Placeholder = props => {
  const { children, selectProps, innerProps } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
};

const SingleValue = props => {
  const { children, selectProps, innerProps } = props;
  return (
    <Typography className={selectProps.classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  );
};

const ValueContainer = props => {
  const { children, selectProps } = props;
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
};

const MultiValue = props => {
  const { children, selectProps, isFocused } = props;
  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={classNames(selectProps.classes.chip, {
        [selectProps.classes.chipFocused]: isFocused,
      })}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
    />
  );
};

const Menu = props => {
  const { children, selectProps, innerProps } = props;
  return (
    <Paper className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
};

const IndicatorsContainer = props => {
  return <components.IndicatorsContainer {...props} />;
};

export {
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
};
