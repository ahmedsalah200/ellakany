import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0f766e',
      light: '#14b8a6',
      dark: '#0d5a54',
    },
    secondary: {
      main: '#F59E0B',
      light: '#FBB040',
      dark: '#D97706',
    },
  },
  typography: {
    fontFamily: '"Noto Sans Arabic", Arial, sans-serif',
    h1: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Amiri", serif',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;