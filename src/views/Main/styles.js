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
  },
  swiper: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center !important',
  },
  container: {
    position: 'relative',
    width: '100%',
    marginTop: '-630px',
    zIndex: 2,
    maxWidth: '1440px',
  },
  title: {
    width: '706px',
    color: theme.palette.text.main,
  },
  textAccountDeposit: {
    textShadow:
      '0 10px 10px rgba(30, 65, 155, 0.1), 0 -4px 10px rgba(12, 88, 170, 0.2)',
    fontSize: '40px',
    fontWeight: 'bold',
    color: theme.palette.text.main,
  },
  bgLayer1: {
    marginTop: '100px',
    width: '100%',
    boxShadow:
      '0 10px 10px 0 rgba(30, 65, 155, 0.1), 0 -4px 10px 5px rgba(12, 88, 170, 0.1)',
    backgroundColor: theme.palette.text.main,
    borderRadius: '5px',
  },
  layer1: {
    width: '100%',
    height: '900px',
    borderRadius: '5px',
  },
  searchMore: {
    width: '224px',
    height: '51px',
    borderRadius: '5px',
    boxShadow:
      '0 10px 10px 0 rgba(30, 65, 155, 0.1), 0 -4px 10px 5px rgba(12, 88, 170, 0.1)',
    backgroundImage: `linear-gradient(258deg, ${theme.palette.primary.lightMain} -15%, ${theme.palette.primary.main} 108%)`,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.11,
  },
  searchMoreText: {
    fontWeight: 'bold',
    letterSpacing: '1.11px',
    color: theme.palette.text.main,
    fontSize: '16px',
  },
  title2: {
    marginTop: '100px',
    color: theme.palette.primary.main,
    fontSize: '40px',
    fontWeight: 'bold',
  },
  iWantArea: {
    paddingTop: '48px',
    paddingBottom: '125px',
    display: 'flex',
    justifyContent: 'space-between!important',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow:
      '0 10px 10px 0 rgba(30, 65, 155, 0.1), 0 -4px 10px 5px rgba(12, 88, 170, 0.1)',
    border: 'solid 2px transparent',
    '&:hover': {
      border: 'solid 2px #00b0f5',
    },
  },
}));

const styles = useStyles;
export default styles;
