import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  contactArea: {
    display: 'flex',
    position: 'relative',
    padding: '0 !important',
    height: '100%',
  },
  noPad: {
    padding: '0 !important',
  },
  gridContainer: {
    height: '100%',
  },
  toolBar: {
    height: '80px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: theme.palette.primary.secondary,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    alignItem: 'center',
    position: 'relative',
  },
  divider: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  dividerInside: {
    width: '2px',
    backgroundColor: `${theme.palette.text.main} !important`,
  },
  title: {
    textAlign: 'center',
    display: 'flex',
  },
  logoContainer: {
    display: 'flex',
    alignItem: 'center',
  },
}));

const styles = useStyles;
export default styles;
