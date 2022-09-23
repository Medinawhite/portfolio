import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import {TemaPrincipal} from '../temas/Temaprincipal.js'







export default function Navbar  () {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="sticky" theme={TemaPrincipal} color='transparent' >
      <Container maxWidth="xl">
        <Toolbar >
                <Typography className="title" variant="h6" noWrap component="a" href="/"
                sx={{
                    flexGrow: 1,
                    mr: 10,
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}>
                  Alejandro Medina
                </Typography>
            <Box  sx={{display: { xs: 'flex', md: 'none' }}}>
              <MenuIcon onClick={handleClick}></MenuIcon>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem   onClick={handleClose}>Sobre Mi</MenuItem>
                <MenuItem   onClick={handleClose}>Proyectos</MenuItem>
                <MenuItem   onClick={handleClose}>CV</MenuItem>
                <MenuItem   onClick={handleClose}>Contacto</MenuItem>
              </Menu>
            </Box>
            <Box   sx={{  display: { xs: 'none', md: 'flex' } }}>
              <Button  color='inherit'>SOBRE MI</Button>
              <Button to='tarjetas' color='inherit'>CV</Button>
              <Button  color='inherit'>PROYECTOS</Button>
              <Button href='about'color='inherit'>CONTACTO</Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

