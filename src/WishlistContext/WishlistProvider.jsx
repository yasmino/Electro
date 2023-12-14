import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import data from "../../Data/db.json"
export const WishlistContext = createContext({});


// eslint-disable-next-line react/prop-types
const WishlistProvider = ({ children }) => {

    const Electronics = data.Electronics;
    const [mobileData, setMobileData] = useState([]);
    const [tabletData, setTabletData] = useState([]);
    const [laptopData, setLaptopData] = useState([]);
    const [watchesData, setWatchesData] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [wishlistcount, setWishlistCount] = useState(0);
    const [wishlistIcon, setWishlistIcon] = useState(false);
   
    const handleFavorite = (product) => {
      let favorites;
      const wishlistProducts = favoriteItems.find((item) => item.id === product.id);
      if (wishlistProducts) {
        favorites = favoriteItems.map((item) =>
          item.id === product.id ? { ...item, wishlist: !item.wishlist } : item
        );
        setWishlistCount(wishlistcount - 1);
      } else {
        favorites = [...favoriteItems, { ...product, wishlist: true}];
        setWishlistCount(wishlistcount + 1);
      }
      setFavoriteItems(favorites);
      localStorage.setItem("favoriteItems", JSON.stringify(favorites));
    };

    const favs = JSON.parse(localStorage.getItem("favoriteItems")) || [];

    function Item(props) {
      const { sx, ...other } = props;
      return (
        <Box
          sx={{
            p: 1,
            m: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
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
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
      ]),
    };
  

  return (
    <WishlistContext.Provider value={{
      Electronics, favs ,
      // handleRemove,
      mobileData, setMobileData,
      tabletData, setTabletData,
      laptopData, setLaptopData,
      watchesData, setWatchesData,
     handleFavorite, favoriteItems, setFavoriteItems,
      wishlistcount, setWishlistCount,
      wishlistIcon, setWishlistIcon,
      Item
     }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;