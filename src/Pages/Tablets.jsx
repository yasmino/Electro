import "../Components/category-section/Category.css"
import TabletList from "../Components/Tablet/TabletList"
import { useContext, useEffect } from "react";
import { WishlistContext } from "../WishlistContext/WishlistProvider";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

const Tablet = () => {

  const {Electronics, setTabletData, tabletData} = useContext(WishlistContext);

  const fetchTabletData = () => {
    const tablets = Electronics.filter(
      (electronic) => electronic.type === "Tablet"
    );
    setTabletData(tablets);
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
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container spacing={2} className="product-section">
        {tabletData.map((data, index) => {
          const { id, name, image, price } = data;
          return (
            <TabletList key={index} name={name} image={image} price={price} id={id} />
          );
        })}
      </Grid>
      </Container>
</>
  );
};

export default Tablet;
