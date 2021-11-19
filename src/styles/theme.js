import { createTheme } from '@material-ui/core';
const fontWeight = {
  black: 900,
  bold: 700,
  light: 300,
  medium: 500,
  regular: 400,
  thin: 100
};

const containerFluid = {
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const drawerWidth = '260px';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.regular,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    fontSizeInherit: 'inherit',

    h1: {
      fontSize: '60px',
      fontWeight: fontWeight.light,
    },
    h2: {
      fontSize: '48px',
      fontWeight: fontWeight.regular,
    },
    h3: {
      fontSize: '34px',
      fontWeight: fontWeight.regular,
    },
    h4: {
      fontSize: '24px',
      fontWeight: fontWeight.regular,
    },
    h5: {
      fontSize: '20px',
      fontWeight: fontWeight.medium,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: fontWeight.medium,
    },
    body1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontSize: '14px',
      fontWeight: fontWeight.regular,
    },
    button: {
      fontSize: '14px',
      fontWeight: fontWeight.bold,
    },
    caption: {
      fontSize: '12px',
      fontWeight: fontWeight.regular,
    },
    overline1: {
      fontSize: '10px',
      fontWeight: fontWeight.regular,
    },
    overline2: {
      fontSize: '10px',
      fontWeight: fontWeight.medium,
    },
  },
  drawerWidth,
  transition: { transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)' },
  boxShadow: { boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)' },
  query: {
    small: '@media (max-width:767px)',
    medium: '@media (min-width:768px) and (max-width:1299px)',
    mediumsmall: '@media (max-width:1299px)',
    large: '@media (min-width:1300px)',
  },
});

export default theme;
