import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const ConnectCard = () => {
  return (
    <Box sx={{ maxWidth: 350, background: "#C8E6C9" }}>
      <Card>
        <CardContent sx={{ padding: 3, background: "#C8E6C9" }}>
          <Typography variant="h5">Connect With Farmers</Typography>
          <Typography variant="h6">Chat and more</Typography>
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

export default ConnectCard;
