
import { createTheme } from '@mui/material/styles';



export const TemaPrincipal= createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(255,255,255,0.98)',
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