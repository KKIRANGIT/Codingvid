import { Grid, Typography, Box, Container } from "@mui/material";
// import { Container } from "@mui/system";
import React from "react";
// import cities from "../data.json";
import Card from "./Card";
import { useState, useEffect } from "react";



function Body() {

    const [cities, setCities] = useState([]);
    useEffect(() => {
      fetch('data.json')
        .then(response => response.json())
        .then(json => setCities(json))
        .catch(error => console.error(error));
    }, []);

  return (
    <>
      <Container>
        {cities.map((city) => (
          <Box key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={2}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2.5}>
              {city.tours.map((tour) => (
                <Card tour={tour}  key={tour.id}/>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default Body;
