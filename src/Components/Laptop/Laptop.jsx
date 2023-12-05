import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import data from "../../../Data/db.json";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PropTypes from "prop-types";
import LaptopList from "./LaptopList";
import "../category-section/Category.css";

const Laptop = () => {
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

  const [laptopData, setLaptopDate] = useState([]);

  const Electronics = data.Electronics;

  const fetchLaptopData = () => {
    const Laptop = Electronics.filter(
      (electronic) => electronic.type === "Laptop"
    );
    setLaptopDate(Laptop);
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
          const { name, image, price } = data;
          return (
            <LaptopList key={index} name={name} image={image} price={price} />
          );
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
