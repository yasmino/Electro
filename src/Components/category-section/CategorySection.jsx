import Tablet from "../Tablet/Tablet";
import SmartWatches from "../smart-watches/SmartWatches";
import Laptop from "../Laptop/Laptop";
import Container from '@mui/material/Container';

const CategorySection = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
    <Tablet />
    <Laptop />
    <SmartWatches />
    </Container>
  )
};

export default CategorySection;
