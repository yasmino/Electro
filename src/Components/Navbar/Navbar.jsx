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
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
              <Box
                className="nav-icons"
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
                  sx={{
                    my: 2,
                    display: "block",
                  }}
                >
                  <Link to="/cart">
                    <ShoppingCartIcon sx={{ color: "black" }} />
                    <span className="cart-count">0</span>
                  </Link>
                </Button>

                {/* login */}
                <Button
                  className="nav-btn"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/login">
                    <PersonIcon sx={{ color: "black" }} />
                  </Link>
                </Button>

                {/* wishList */}
                <Button
                  className="nav-btn"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
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
