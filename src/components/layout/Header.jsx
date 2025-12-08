import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'Favorites', path: '/favorites' },
    { label: 'Profile', path: '/profile' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between',
            py: 1,
          }}
        >
          
          {/* LOGO - Sinistra */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '1.3rem',
            }}
            component={RouterLink}
            to="/"
          >
            Ratatouille
          </Typography>

          {/* NAVIGAZIONE - Centro (visibile solo da 900px in su) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                color="inherit"
                component={RouterLink}
                to={link.path}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  color: '#666',
                  fontWeight: '500',
                  '&:hover': {
                    color: '#333',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* DESTRA - Bottone Create Recipe + Hamburger */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Bottone Create Recipe - nascosto su mobile */}
            <Button
              variant="contained"
              component={RouterLink}
              to="/create-recipe"
              startIcon={<AddIcon />}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                backgroundColor: '#ffc107',
                color: '#333',
                textTransform: 'none',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#ffb300',
                },
              }}
            >
              Create Recipe
            </Button>

            {/* HAMBURGER MENU - Mobile */}
            <IconButton
              color="inherit"
              onClick={toggleMenu}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: '#333',
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* DRAWER - Menu mobile */}
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.path}
                component={RouterLink}
                to={link.path}
                onClick={toggleMenu}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary={link.label}
                  sx={{ color: '#333' }}
                />
              </ListItem>
            ))}
            <ListItem
              component={RouterLink}
              to="/create-recipe"
              onClick={toggleMenu}
              sx={{
                backgroundColor: '#ffc107',
                mx: 1,
                borderRadius: '4px',
                mt: 2,
              }}
            >
              <ListItemText 
                primary="Create Recipe"
                sx={{ color: '#333', fontWeight: '600' }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
