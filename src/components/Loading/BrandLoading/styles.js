import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearProgressRoot: {
    height: 2,
  },
  linearColorPrimary: {
    backgroundColor: '#e8e8e8',
  },
  linearBarColorPrimary: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
