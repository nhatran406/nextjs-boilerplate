import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
  },
  combinedShape: {
    width: '103px',
    height: '45px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '80px',
    },
  },
  logo: {
    width: '100%',
    height: '100%',
  },
}));
const styles = useStyles;
export default styles;
