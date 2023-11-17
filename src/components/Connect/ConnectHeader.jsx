// Header.js

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ConnectHeader = () => {
  return (
    <Box sx={{ mt: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Farmers Connect
        </Typography>
        <Button color="inherit">Questions</Button>
      </Toolbar>
    </Box>
  );
};

export default ConnectHeader;
