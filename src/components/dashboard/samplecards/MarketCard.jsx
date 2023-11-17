import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const MarketCard = () => {
  return (
    <Box sx={{ maxWidth: 350, background: "#C8E6C9" }}>
      <Card>
        <CardContent sx={{ padding: 3, background: "#C8E6C9" }}>
          <Typography variant="h5">Explore the Market</Typography>
          <Typography variant="h6">Order sell buy</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          </Typography>
        </CardContent>
        <Box sx={{ padding: 1 }}>
          <Button>See more</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default MarketCard;
