import { Box, Container, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const NavBar = () => {
  return (
    <>
      <Container>
        <Box sx={{ width: "200px", bgcolor: "green" }}>
          <Typography variant="h2">Hello</Typography>
          <AcUnitIcon />
        </Box>
      </Container>
    </>
  );
};

export default NavBar;
