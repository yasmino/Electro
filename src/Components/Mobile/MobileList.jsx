import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import "../category-section/Category.css";

const MobileList = ({ name, image, price }) => {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "white.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",

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
    <Grid item xs={6} md={3} spacing={3}>
      <Item className="product-image">
        <div className="wishlist">
          <FavoriteBorderOutlinedIcon />
        </div>
        <img src={image} />
      </Item>
      <Item className="product">
        <Box className="product-details">
          <Item sx={{ flexGrow: 1 }}>
            <h3 className="product-title">{name}</h3>
          </Item>
          <Item className="cart-icon">
            <Link to="/cart">
              <AddShoppingCartOutlinedIcon />
            </Link>
          </Item>
        </Box>
        <div className="ratings-container">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className="product-price">${price}</div>
      </Item>
    </Grid>
  );
};

export default MobileList;
