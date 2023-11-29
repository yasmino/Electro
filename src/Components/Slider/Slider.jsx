import { Box, styled } from "@mui/material";
import sliderImg from "../../assets/julian-o-hayon-HY3l4IeOc3E-unsplash.jpg";

const Slider = () => {
  const Background = styled(Box)({
    height: "91vh",
    backgroundImage: `url(${sliderImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
  });
  return (
    <Box>
      <Background />
    </Box>
  );
};

export default Slider;
