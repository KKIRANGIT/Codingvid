import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export default function MediaCard({ image }) {
  return (
      <Card sx={{ maxWidth: 450,
       marginX: 'auto' 
       }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image.url}
          title="green iguana"
        />
        <CardContent sx={{maxWidth: '350px', textOverflow: 'ellipsis' }}>
          <Typography gutterBottom variant="h6" component="div">
            {image.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {image.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  );
}
