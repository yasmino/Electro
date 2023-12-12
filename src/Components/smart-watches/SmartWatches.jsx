import "../category-section/Category.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import data from "../../../Data/db.json";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import SmartWatchesList from "./SmartWatchesList";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const SmartWatches = () => {
  const { Item } = useContext(CartContext);
  const [watchesData, setWatchesDate] = useState([]);
  const Electronics = data.Electronics;

  const fetchWatchesData = () => {
    const watches = Electronics.filter(
      (electronic) => electronic.type === "Smartwatch"
    );
    setWatchesDate(watches);
  };

  useEffect(() => {
    fetchWatchesData();
  }, []);

  return (
    <>
      <div className="category-section">
        <div className="category-title">
          <div className="divide-line"></div>
          <span>
            <strong>SmartWatches</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Grid container spacing={2} className="product-section">
        {watchesData.slice(0, 4).map((data, index) => {
          return <SmartWatchesList data={data} key={index} />;
        })}
        <Box className="discover-more">
          <Item sx={{ flexGrow: 3 }}>
            <Link to="/smartWatch" style={{ textDecoration: "none" }}>
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

export default SmartWatches;
