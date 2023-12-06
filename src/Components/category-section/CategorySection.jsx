import Tablet from "../Tablet/Tablet";
import SmartWatches from "../smart-watches/SmartWatches";
import Laptop from "../Laptop/Laptop";
import Container from "@mui/material/Container";
import Mobiles from "../Mobile/Mobiles";

const CategorySection = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Mobiles />
      <Tablet />
      <Laptop />
      <SmartWatches />
    </Container>
  );
};

export default CategorySection;
