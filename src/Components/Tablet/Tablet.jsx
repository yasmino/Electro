import "../category-section/Category.css";
import TabletList from "./TabletList";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import data from "../../../Data/db.json";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Tablet = () => {
  const { Item } = useContext(CartContext);
  const [tabletData, setTabletDate] = useState([]);
  const Electronics = data.Electronics;

  const fetchTabletData = () => {
    const tablets = Electronics.filter(
      (electronic) => electronic.type === "Tablet"
    );
    setTabletDate(tablets);
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
