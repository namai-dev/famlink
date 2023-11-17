import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const CardBoard = () => {
  return (
    <Box sx={{ maxWidth: 350, background: "#C8E6C9" }}>
      <Card>
        <CardContent sx={{ padding: 3, background: "#C8E6C9" }}>
          <Typography variant="h5">Get Better Insights</Typography>
          <Typography variant="h6">from Your Smart Farm</Typography>
          <Typography>
            Our Smart Farm solution provides invaluable insights into your
            agricultural operations
          </Typography>
        </CardContent>
        <Box sx={{ padding: 1 }}>
          <Button>See more</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CardBoard;
