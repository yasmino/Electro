import Box from "@mui/material/Box";
import {useEffect, useContext  } from "react";
import { WishlistContext } from "../../WishlistContext/WishlistProvider";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LaptopList from "./LaptopList";
import "../category-section/Category.css";

const Laptop = () => {
  const {Electronics,laptopData, setLaptopData, Item} = useContext(WishlistContext);

  const fetchLaptopData = () => {
    const Laptop = Electronics.filter(
      (electronic) => electronic.type === "Laptop"
    );
    setLaptopData(Laptop);
  };

  useEffect(() => {
    fetchLaptopData();
  }, []);

  return (
    <>
      <div className="category-section">
        <div className="category-title">
          <div className="divide-line"></div>
          <span>
            <strong>Laptop</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Grid container spacing={2} className="product-section">
        {laptopData.slice(0, 4).map((data, index) => {
          return <LaptopList key={index} data={data} />;
        })}

        <Box className="discover-more">
          <Item sx={{ flexGrow: 3 }}>
            <Link to="/laptop" style={{ textDecoration: "none" }}>
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

export default Laptop;
