import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#163fa1',
      lightMain: '#006ab5',
      light: '#00b0f5',
    },
    secondary: {
      main: '#c9dd03',
    },
    error: {
      main: red.A400,
      light: '#e66666',
    },
    background: {
      default: '#f9f9f9',
      lightGrey: 'rgba(22, 63, 161, 0.05)',
      white: '#ffffff',
      grey: '#4a4f5c',
    },
    text: {
      main: '#ffffff',
      dark: '#323232',
      blueWhite: '#24abe2',
      normal: '#0d6cc2',
      label: '#202020',
    },
  },
  size: {
    fontSize: '18px',
  },
});

export default theme;
