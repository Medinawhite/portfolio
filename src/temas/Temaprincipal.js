import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const TemaPrincipal= createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(0,0,0,0.98)',
    },
    secondary: {
      main: '#53c14f',
    },
    error: {
      main: '#00d600',
    },
    warning: {
      main: '#fffe10',
    },
    success: {
      main: '#300243',
    },
  },
});