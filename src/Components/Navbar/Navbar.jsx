import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
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
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../../WishlistContext/WishlistProvider"

const Navbar = () => {
  const { items } = useContext(CartContext);
  const {wishlistcount} = useContext(WishlistContext);

  return (
    <>
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
                  <Link to="/" className="logoLink">
                    Electro
                  </Link>
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
                  <Button className="nav-btn">
                    <Link to="/cart">
                      <ShoppingCartIcon sx={{ color: "black" }} />
                    </Link>
                    <span className="cart-count">{items.length}</span>
                  </Button>

                  {/* login */}
                  <Button className="nav-btn registericon">
                    <RegistrationForm />
                  </Button>

                  {/* wishList */}
                  <Button className="nav-btn wishlisticon">
                  <Link to="/wishList">
                    <FavoriteIcon sx={{ color: "black" }} />
                    <span className="cart-count">{wishlistcount}</span>
                  </Link>
                </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
