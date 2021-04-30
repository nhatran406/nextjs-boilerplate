import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between!important',
    position: 'absolute',
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    width: '100%',
    height: '200px',
  },
}));

const styles = useStyles;
export default styles;
