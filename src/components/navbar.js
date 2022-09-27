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
import { Link } from "react-scroll";
import './navbar.css'







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
                <MenuItem   onClick={handleClose}><Link to="Principal" spy={true} smooth={true} offset={0} duration={50}>SOBRE MI</Link></MenuItem>
                <MenuItem   onClick={handleClose}><Link to="Skills" spy={true} smooth={true} offset={0} duration={50}>SKILLS</Link></MenuItem>
                <MenuItem   onClick={handleClose}><Link to="tarjetas" spy={true} smooth={true} offset={0} duration={50}>PROYECTOS</Link></MenuItem>
                <MenuItem   onClick={handleClose}><Link to="contacto" spy={true} smooth={true} offset={0} duration={50}>CONTACTO</Link></MenuItem>
              </Menu>
            </Box>
            <Box   sx={{  display: { xs: 'none', md: 'flex' } }}>
              <Button className="nav-item"  color='inherit'><Link to="Principal" spy={true} smooth={true} offset={0} duration={50}>SOBRE MI</Link></Button>
              <Button className="nav-item" color='inherit'><Link to="Skills" spy={true} smooth={true} offset={0} duration={50} >SKILLS</Link></Button>
              <Button className="nav-item" color='inherit'><Link to="tarjetas" spy={true} smooth={true} offset={0} duration={50}>PROYECTOS</Link></Button>
              <Button className="nav-item" color='inherit'><Link to="contacto" spy={true} smooth={true} offset={0} duration={50}>CONTACTO</Link></Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

