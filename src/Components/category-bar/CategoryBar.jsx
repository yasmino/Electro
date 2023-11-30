import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './CategoryBar.css'
import { Link } from "react-router-dom";


const CategoryBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
   <AppBar position="static">
      <Container maxWidth="xl" className="categoriesnav">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <MenuItem  onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
               <Link
                to="/mobile"
                style={{ textDecoration: "none", color: "black" }}
               >
                Mobile
              </Link>
              </Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
               <Link
                to="/laptop"
                style={{ textDecoration: "none", color: "black" }}
               >
                Laptop
              </Link>
              </Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
               <Link
                to="/smartwatch"
                style={{ textDecoration: "none", color: "black" }}
               >
                Smartwatch
              </Link>
              </Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
               <Link
                to="/tablet"
                style={{ textDecoration: "none", color: "black" }}
               >
                Tablet
              </Link>
              </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box className="categories-menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button 
                className="nav-btn"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link
                to="/mobile"
                style={{ textDecoration: "none", color: "black" }}
              >
                Mobile
              </Link>
              </Button>
              <Button 
                className="nav-btn"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link
                to="/smartphone"
                style={{ textDecoration: "none", color: "black" }}
              >
                SmartPhone
              </Link>
              </Button>
              <Button 
                className="nav-btn"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link
                to="/laptop"
                style={{ textDecoration: "none", color: "black" }}
              >
                Laptop
              </Link>
              </Button>
              <Button 
                className="nav-btn"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link
                to="/tablets"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tablet
              </Link>
              </Button>
          
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default CategoryBar