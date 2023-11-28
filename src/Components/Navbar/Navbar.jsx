import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  TextField,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const pages = ["Login", "Cart", "WhishList"];
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
        <Toolbar disableGutters>
          {/* icons Button */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/login">login</Link>
                </Typography>
              </MenuItem>
              {/* cart */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/cart">Cart</Link>
                </Typography>
              </MenuItem>
              {/* whishList */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/whishlist">WhishList</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Grid container spacing={2}>
            {/* logo */}
            <Grid item xs={6} md={4}>
              <Typography variant="h4" className="electroLogo">
                Electro
              </Typography>
            </Grid>

            {/* search */}
            <Grid item xs={6} md={6}>
              <Box>
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
              </Box>
            </Grid>

            {/* pages */}
            <Grid item xs={6} md={2}>
              <Box
                className="categories-menu"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                {/* cart */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/cart">Cart</Link>
                </Button>

                {/* login */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/login">Login</Link>
                </Button>

                {/* whishList */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/whishList">WhishList</Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
