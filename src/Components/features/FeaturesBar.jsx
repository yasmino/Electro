import { Grid, Box, Typography, Container } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LockClockIcon from "@mui/icons-material/LockClock";
import "./FeatureBar.css";

const FeaturesBar = () => {
  return (
    <>
      <Grid container sx={{ bgcolor: "#ededea" }}>
        {/* First Feature */}
        <Grid
          sm={6}
          md={3}
          sx={{
            borderLeft: "2px solid white",
            textAlign: "center",
            padding: "10px 0 10px 0 ",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box>
                <LocalShippingIcon sx={{ fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  FREE SHIPPING & RETURN
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Free shipping on all orders over $99.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* second Feature */}
        <Grid
          md={3}
          sm={6}
          sx={{
            borderLeft: "2px solid white",
            textAlign: "center",
            padding: "10px 0 10px 0 ",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box>
                <MonetizationOnIcon sx={{ fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  MONEY BACK GUARANTEE
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  100% money back guarantee
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* Third Feature */}
        <Grid
          md={3}
          sm={6}
          sx={{
            borderLeft: "2px solid white",
            textAlign: "center",
            padding: "10px 0 10px 0 ",
          }}
          className="thirdFt"
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box>
                <WatchLaterIcon sx={{ fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  ONLINE SUPPORT 24/7
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* Fourth Feature */}
        <Grid
          md={3}
          sm={6}
          sx={{
            borderLeft: "2px solid white",
            textAlign: "center",
            padding: "10px 0 10px 0 ",
          }}
          className="fourthFt"
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box>
                <LockClockIcon sx={{ fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  SECURE PAYMENT
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesBar;
