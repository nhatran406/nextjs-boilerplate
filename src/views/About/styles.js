import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWrap: {
    paddingBottom: '200px',
  },
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center !important',
  },
  container: {
    position: 'relative',
    width: '100%',
    zIndex: 2,
    paddingBottom: '40px',
    maxWidth: '1195px',
  },
}));

const styles = useStyles;
export default styles;
