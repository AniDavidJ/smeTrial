import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fffff',
    },
    secondary: {
      main: '#de1f2e',
    },
    black: {
      main: '#000000',
      contrastText: "#fff"
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;