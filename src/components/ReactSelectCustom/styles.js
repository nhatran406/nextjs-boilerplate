import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex!important',
    padding: 0,
    fontFamily: 'Effra',
    color: theme.palette.primary.main,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 20,
    // fontWeight: 600,
    color: theme.palette.primary.main,
  },
  placeholder: {
    position: 'absolute',
    left: 4,
    fontSize: theme.size.fontSize,
    opacity: '0.3',
    color: theme.palette.text.label,
  },
  paper: {
    top: 36,
    zIndex: '1500',
    position: 'absolute',
    marginTop: 2,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  menu: {
    '& span': {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
}));
const styles = useStyles;
export default styles;
