import {
  Agriculture,
  ConnectWithoutContact,
  History,
  Lightbulb,
  QuestionAnswer,
} from "@mui/icons-material";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

const ContactSection = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 1, md: 6 }}
      p={4}
    >
      <Grid item xs={12} sm={6} md={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ConnectWithoutContact />
          <Box mt={2}>
            <Typography color={"blue"} variant="button">
              Talk to Expert
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Lightbulb />
          <Box mt={2}>
            <Typography color={"blue"} variant="button">
              Tutorials
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <QuestionAnswer />
          <Box mt={2}>
            <Typography color={"blue"} variant="button">
              Ask view Question
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <History />
          <Box mt={2}>
            <Typography color={"blue"} variant="button">
              Your History
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Agriculture />
          <Box mt={2}>
            <Typography color={"blue"} variant="button">
              CROPS
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
