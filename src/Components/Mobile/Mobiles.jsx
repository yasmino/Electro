import "../category-section/Category.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import data from "../../../Data/db.json";
import MobileList from "./MobileList";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Mobiles = () => {
  const [mobileData, setMobileData] = useState([]);
  const { Item } = useContext(CartContext);

  const Electronics = data.Electronics;

  // fetching data
  const fetchMobileData = () => {
    const mobiles = Electronics.filter(
      (electronic) => electronic.type === "Mobile"
    );
    setMobileData(mobiles);
  };

  useEffect(() => {
    fetchMobileData();
  }, []);

  return (
    <>
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
          return <MobileList key={index} data={data} />;
        })}

        <Box className="discover-more">
          <Item sx={{ flexGrow: 3 }}>
            <Link to="/mobile" style={{ textDecoration: "none" }}>
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

export default Mobiles;
