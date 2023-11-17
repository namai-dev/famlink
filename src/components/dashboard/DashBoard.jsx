import { Box, Divider, Grid, Typography } from "@mui/material";
import CardBoard from "./samplecards/Card";
import MarketCard from "./samplecards/MarketCard";
import ConnectCard from "./samplecards/ConnectCard";

import ContactSection from "./contact/ContactSection";
import AutoSlidingCard from "./trendsSlide/AutoSlidingCard";
import AgriculturalQuestions from "./expandible/ExpandableList";

const DashBoard = () => {
  return (
    <Box>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <CardBoard />
        <MarketCard />
        <ConnectCard />
      </Box>
      <Divider />

      <Box p={2}>
        <ContactSection />
      </Box>
      <Divider />
      <Box p={2}>
        <AutoSlidingCard />
      </Box>
      <Box p={2}>
        <AgriculturalQuestions />
      </Box>
    </Box>
  );
};

export default DashBoard;
