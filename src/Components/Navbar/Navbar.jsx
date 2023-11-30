import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
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
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* icons Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              {/* logo */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "15px",
                      letterSpacing: ".04rem",
                      lineHeight: "1",
                    }}
                  >
                    Electro
                  </Link>
                </Typography>
              </MenuItem>
              {/* login */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: "Montserrat Alternates",
                      letterSpacing: ".04rem",
                      lineHeight: "1",
                    }}
                  >
                    login
                  </Link>
                </Typography>
              </MenuItem>
              {/* cart */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/cart"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: "Montserrat Alternates",
                      letterSpacing: ".04rem",
                      lineHeight: "1",
                    }}
                  >
                    Cart
                  </Link>
                </Typography>
              </MenuItem>
              {/* whishList */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/whishlist"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: "Montserrat Alternates",
                      letterSpacing: ".04rem",
                      lineHeight: "1",
                    }}
                  >
                    WhishList
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Grid container>
            {/* logo */}
            <Grid item xs={4} md={4}>
              <Typography
                variant="h4"
                className="electroLogo"
                sx={{
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                  justifyContent: "center",
                  lineHeight: "2",
                }}
              >
                Electro
              </Typography>
            </Grid>

            {/* search */}
            <Grid item xs={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70px",
                }}
              >
                <TextField
                  id="outlined-search"
                  label="Search "
                  type="search"
                  className="searchBox"
                  sx={{ width: "350px" }}
                />
              </Box>
            </Grid>

            {/* pages */}
            <Grid item xs={4} md={4}>
              <Box
                className="categories-menu"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  flexDirection: "row",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                {/* cart */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                  }}
                >
                  <Link to="/cart">
                    <ShoppingCartIcon sx={{ color: "black" }} />
                  </Link>
                </Button>

                {/* login */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/login">
                    <PersonIcon sx={{ color: "black" }} />
                  </Link>
                </Button>

                {/* whishList */}
                <Button
                  className="nav-btn"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/whishList">
                    <FavoriteIcon sx={{ color: "black" }} />
                  </Link>
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
