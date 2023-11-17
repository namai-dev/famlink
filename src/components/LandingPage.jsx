import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main">
        <Box sx={{ textAlign: "center", paddingTop: "3rem" }}>
          <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
            Welcome to Farmlink
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Revolutionize your farming with Farmlink. Gain access to smart
            farming technologies, real-time weather data, and expert crop
            advice.
          </Typography>
          <Link to="/dashboard">
            <Button variant="contained" color="primary">
              Explore Dashboard
            </Button>
          </Link>
        </Box>
      </Container>

      <Box
        sx={{
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Smart Farming</Typography>
                  <Typography variant="body2">
                    Automate irrigation based on real-time data and crop
                    requirements.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Weather Insights</Typography>
                  <Typography variant="body2">
                    Access current weather data to make informed farming
                    decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Decision Support</Typography>
                  <Typography variant="body2">
                    Get expert advice and market conditions to optimize crop
                    selection.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            What Farmers Say
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">John Doe</Typography>
                  <Typography variant="body2">
                    "Farmlink transformed my farming experience. I've increased
                    my crop yields and reduced water usage."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Jane Smith</Typography>
                  <Typography variant="body2">
                    "The weather data and crop advice from Farmlink have made a
                    huge difference in my farming decisions."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Robert Johnson</Typography>
                  <Typography variant="body2">
                    "I can monitor my smart farm remotely and receive alerts if
                    there are any issues. It's a game-changer."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Featured Crops
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Tomatoes" />
                <CardContent>
                  <Typography variant="body2">
                    Learn how to optimize tomato farming with Farmlink's
                    guidance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Wheat" />
                <CardContent>
                  <Typography variant="body2">
                    Discover the best practices for wheat cultivation with
                    Farmlink's support.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Corn" />
                <CardContent>
                  <Typography variant="body2">
                    Get insights into successful corn farming using Farmlink's
                    tools.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" gutterBottom>
            &copy; {new Date().getFullYear()} Farmlink. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
