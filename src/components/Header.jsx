import { useState, useEffect  } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import useMediaQuery from '@mui/material/useMediaQuery';

import './Header.css'
export const Header = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navbarClass = scrolling ? 'scrolling' : '';
    console.log('Clase de la barra de navegación:', navbarClass);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="fixed" className={navbarClass} sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }}>
    <Toolbar>
      {isMobile ? (
        // Mostrar el botón de menú hamburguesa en dispositivos móviles
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        // Mostrar la ul y los iconos de las redes en la versión de escritorio
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <Typography variant="h6" component="div">
        Logo
          </Typography>
          <List sx={{ display: 'flex' }}>
            <ListItem >
              <ListItemText primary="Sobre mi" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Habilidades" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Proyectos" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Certificados" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Contacto" />
            </ListItem>
          </List>
          <Box>
            {/* Iconos de redes sociales */}
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      )}
      {/* Menú hamburguesa para dispositivos móviles */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Acerca de" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Proyectos" />
          </ListItem>
        </List>
      </Drawer>
    </Toolbar>
  </AppBar>
  )
}
