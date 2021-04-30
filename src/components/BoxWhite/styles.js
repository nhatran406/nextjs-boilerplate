import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },

  iconLocation: {},
  icon: {
    width: '64px',
    height: '64px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    fontSize: '24px',
    lineHeight: '1.5',
    color: theme.palette.text.dark,
    marginTop: '27px',
    maxWidth: '384px',
    minHeight: '150px',
  },
  navigateBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  leftArrow: {
    margin: theme.spacing(1),
    width: '70px',
    height: '70px',
    color: theme.palette.primary.main,
  },
}));

const styles = useStyles;
export default styles;
