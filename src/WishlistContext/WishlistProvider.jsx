import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import data from "../../Data/db.json"

export const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {

    const Electronics = data.Electronics;
    const [mobileData, setMobileData] = useState([]);
    const [tabletData, setTabletData] = useState([]);
    const [laptopData, setLaptopData] = useState([]);
    const [watchesData, setWatchesData] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [wishlistcount, setWishlistCount] = useState(0);
    const [wishlistIcon, setWishlistIcon] = useState(false);
   

    const handleFavorite = (id) => {
      const wishlistProducts = electronics.map(item => {
        return item.id === id ? { ...item, wishlist: !item.wishlist}: item;
      });
      setWishlistCount(wishlistcount + 1);
      setElectronics(wishlistProducts);
      setWishlistIcon((prev) => !prev);
    }

    const handleRemove = (id) => {
      const notWishlistProduct = electronics.filter((item) => item.id !== id);
      setElectronics(notWishlistProduct);
      setWishlistCount(wishlistcount - 1);
    }
 
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
      Electronics, 
      mobileData, setMobileData,
      tabletData, setTabletData,
      laptopData, setLaptopData,
      watchesData, setWatchesData,
      electronics, setElectronics,
      wishlistcount, setWishlistCount,
      wishlistIcon, setWishlistIcon,
      handleFavorite, handleRemove,
      Item
     }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
