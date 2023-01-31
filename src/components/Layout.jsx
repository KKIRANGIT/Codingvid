import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import AlignItemsList from "./AlignItemsList";
import Body from "./Body";
import LeftSidebar from "./LeftSidebar";
import MediaCard from "./MuiCardDemo";
import Navbar from "./Navbar";
import GlobalStyles from "@mui/material/GlobalStyles";
import darkScrollbar from "@mui/material/darkScrollbar";
import images from "./images";

function Layout() {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <GlobalStyles styles={{ ...darkScrollbar() }} />
      <Container maxWidth={"false"} sx={{ py: 10 }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item lg={2} sx={{ display: { xs: "none", lg: "block" } }}>
            <LeftSidebar />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Container maxWidth="xl">
              <Box sx={{ pl: 1.5 }}>
                <Typography
                  sx={{ fontWeight: "500" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Available Courses
                </Typography>
              </Box>
              <Divider />
              <Grid
                container
                spacing={1.5}
                justifyContent="left"
                paddingTop={2}
              >
                {images.map((img) => (
                  <Grid item xs={12} sm={6} md={4} key={img.id}>
                    <MediaCard image={img} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
            <AlignItemsList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Layout;
