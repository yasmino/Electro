import "../Components/category-section/Category.css"
import LaptopList from "../Components/Laptop/LaptopList"
import { useContext, useEffect } from "react";
import { WishlistContext } from "../WishlistContext/WishlistProvider";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

const Smartwatch = () => {

  const {Electronics,laptopData, setLaptopData} = useContext(WishlistContext);

  const fetchTabletData = () => {
    const Laptop = Electronics.filter(
      (electronic) => electronic.type === "Laptop"
    );
    setLaptopData(Laptop);
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
            <strong>Laptop</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container spacing={2} className="product-section">
        {laptopData.map((data, index) => {
          return (
            <LaptopList key={index} data={data} />
          );
        })}
      </Grid>
      </Container>
</>
  );
};

export default Smartwatch;
