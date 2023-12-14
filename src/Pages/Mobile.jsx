import "../Components/category-section/Category.css"
import MobileList from "../Components/Mobile/MobileList";
import { useContext, useEffect } from "react";
import { WishlistContext } from "../WishlistContext/WishlistProvider";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

const Mobile = () => {

  const {Electronics,mobileData, setMobileData} = useContext(WishlistContext);

  const fetchTabletData = () => {
    const Mobiles = Electronics.filter(
      (electronic) => electronic.type === "Mobile"
    );
    setMobileData(Mobiles);
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
            <strong>Mobile</strong> Products
          </span>
          <div className="divide-line"></div>
        </div>
      </div>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container spacing={2} className="product-section">
        {mobileData.map((data, index) => {
          return (
            <MobileList key={index} data={data} />
          );
        })}
      </Grid>
      </Container>
</>
  );
};

export default Mobile;
