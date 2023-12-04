import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../category-section/Category.css";
import Grid from "@mui/material/Grid";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Rating from "@mui/material/Rating";
import data from "../../../Data/db.json";

const Mobiles = () => {
  const [mobileData, setMobileDate] = useState([]);

  const Electronics = data.Electronics;

  const fetchMobileData = () => {
    const mobiles = Electronics.filter(
      (electronic) => electronic.type === "Mobile"
    );
    setMobileDate(mobiles);
  };

  useEffect(() => {
    fetchMobileData();
  }, []);

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <div className="category-section">
          <div className="category-title">
            <div className="divide-line"></div>
            <span>
              <strong>Mobile</strong> Products
            </span>
            <div className="divide-line"></div>
          </div>
        </div>
        <Grid container spacing={2} className="product-section">
          {mobileData.slice(0, 4).map((data, index) => {
            const { name, image, price } = data;
            return (
              <Grid key={index} item xs={6} md={3} spacing={3}>
                <Item className="product-image">
                  <div className="wishlist">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <img src={image} />
                </Item>
                <div className="ratings-container">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
                <Item className="product">
                  <Box className="product-details">
                    <Item sx={{ flexGrow: 1 }}>
                      <h3 className="product-title">{name}</h3>
                    </Item>
                    <Item className="cart-icon">
                      <AddShoppingCartOutlinedIcon />
                    </Item>
                  </Box>

                  <div className="product-price">${price}</div>
                </Item>
              </Grid>
            );
          })}

          <Box className="discover-more">
            <Item sx={{ flexGrow: 3 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h3 className="discover-more-title">Discover more</h3>
              </Link>
            </Item>
            <Item className="arrow-icon">
              <Link to="/">
                <ArrowForwardOutlinedIcon />
              </Link>
            </Item>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Mobiles;
