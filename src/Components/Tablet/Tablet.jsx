import "../category-section/Category.css";
import TabletList from "./TabletList";
import { useEffect, useContext  } from "react";
import { WishlistContext } from "../../WishlistContext/WishlistProvider";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Tablet = () => {
  const {Electronics, setTabletData, tabletData, setElectronics, Item} = useContext(WishlistContext);

  const fetchTabletData = () => {
    const tablets = Electronics.filter(
      (electronic) => electronic.type === "Tablet"
    );
    setTabletData(tablets);
    setElectronics(Electronics)
  };

  useEffect(() => {
    fetchTabletData();
  }, []);

  return (
    <>
      <div className="category-section">
        <div className="category-title">
          <div className="divide-line"></div>
          <span>
            <strong>Tablets</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Grid container spacing={2} className="product-section">
        {tabletData.slice(0, 4).map((data, index) => {
          return <TabletList key={index} data={data} />;
        })}
        <Box className="discover-more">
          <Item sx={{ flexGrow: 3 }}>
            <Link to="/tablets" style={{ textDecoration: "none" }}>
              <h3 className="discover-more-title">Discover more</h3>
            </Link>
          </Item>
          <Item className="arrow-icon">
            <ArrowForwardOutlinedIcon />
          </Item>
        </Box>
      </Grid>
    </>
  );
};

export default Tablet;
