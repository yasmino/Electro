import "../Components/category-section/Category.css"
import SmartWatchesList from "../Components/smart-watches/SmartWatchesList"
import { useContext, useEffect } from "react";
import { WishlistContext } from "../WishlistContext/WishlistProvider";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

const Smartwatch = () => {

  const {Electronics, watchesData, setWatchesData} = useContext(WishlistContext);

  const fetchTabletData = () => {
    const tablets = Electronics.filter(
      (electronic) => electronic.type === "Smartwatch"
    );
    setWatchesData(tablets);
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
            <strong>SmartWatch</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container spacing={2} className="product-section">
        {watchesData.map((data, index) => {
          return (
            <SmartWatchesList key={index} data={data}/>
          );
        })}
      </Grid>
      </Container>
</>
  );
};

export default Smartwatch;
