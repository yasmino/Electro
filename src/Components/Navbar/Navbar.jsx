import "./navbar.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Grid,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RegistrationForm from "../registration/registrationform";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Grid container sx={{ p: 1 }} className="Nav-Bar">
            {/* logo */}
            <Grid item xs={3} md={4}>
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
            <Grid item xs={6} md={4}>
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
            <Grid item xs={3} md={4}>
              <Box className="nav-icons" sx={{ display: { xs: "none", md: "flex" }}}>
                <Button className="nav-btn carticon">
                  <Link to="/cart">
                    <ShoppingCartIcon sx={{ color: "black" }} />
                  </Link>
                </Button>

                <Button className="nav-btn registericon">
                  <RegistrationForm />
                </Button>

                <Button className="nav-btn wishlisticon">
                  <Link to="/wishList">
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
