import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../../WishlistContext/WishlistProvider";
// eslint-disable-next-line react/prop-types
const SmartWatchesList = ({ data }) => {
  const { addToCartHandler} = useContext(CartContext);
  const {handleFavorite, Item} = useContext(WishlistContext);
  // eslint-disable-next-line react/prop-types
  const { id, name, image, price } = data;

  return (
    <Grid item xs={6} md={3} spacing={3}>
      <Item className="product-image">
        <div className="wishlist">
        <button
                  onClick={() => {
                    handleFavorite(id);
                  }}
                >
            <FavoriteBorderOutlinedIcon />
            </button>
        </div>
        <img src={image} />
      </Item>
      <Item className="product">
        <Box className="product-details">
          <Item sx={{ flexGrow: 1 }}>
            <h3 className="product-title">{name}</h3>
          </Item>
          <Item className="cart-icon">
            <AddShoppingCartOutlinedIcon
              onClick={() => {
                addToCartHandler(data);
              }}
            />
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

export default SmartWatchesList;
