import React, { useState } from "react";
import {
  List,
  ListItem,
  Collapse,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AgriculturalQuestions = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const agriculturalQuestions = [
    {
      crop: "Maize",
      question: "How to care for maize plants?",
      answer:
        "Maize plants need well-drained soil, regular watering, and proper fertilization. Plant in full sun and provide support for tall varieties.",
      additionalInfo: [
        "Plant maize seeds in rows with spacing of about 12-24 inches between plants.",
        "Fertilize with a balanced fertilizer and provide additional nutrients as needed.",
        "Water consistently, especially during dry periods.",
      ],
    },
    {
      crop: "Beans",
      question: "What pests commonly affect bean crops?",
      answer:
        "Common pests for beans include aphids, bean beetles, and spider mites. Use organic pest control methods for prevention.",
      additionalInfo: [
        "Inspect plants regularly for signs of pests.",
        "Encourage natural predators like ladybugs and spiders.",
        "Apply neem oil or insecticidal soap for organic pest control.",
      ],
    },
    {
      crop: "Onions",
      question: "When is the best time to harvest onions?",
      answer:
        "Onions are typically ready to harvest when the tops have fallen over. Harvest and cure them for a few weeks before storing.",
      additionalInfo: [
        "Stop watering when the tops begin to fall over and yellow.",
        "Loosen the soil around the bulbs before harvesting.",
        "Cure onions in a dry, well-ventilated area before storing.",
      ],
    },
    {
      crop: "Tomatoes",
      question: "How to prevent diseases in tomato plants?",
      answer:
        "Prevent tomato diseases by providing proper spacing, good air circulation, and using disease-resistant varieties. Rotate crops to avoid soil-borne diseases.",
      additionalInfo: [
        "Choose disease-resistant tomato varieties for your region.",
        "Space tomato plants to allow good air circulation.",
        "Water at the base to avoid wetting the foliage.",
      ],
    },
    // Add more questions as needed
  ];

  return (
    <List>
      {agriculturalQuestions.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem
            button
            onClick={() => handleExpand(index)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              {item.crop} - {item.question}
            </Typography>
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expandedItem === index}>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Typography>{item.answer}</Typography>
              <Box mt={2}>
                <Typography variant="subtitle1">
                  Additional Information:
                </Typography>
                <ul>
                  {item.additionalInfo.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              </Box>
            </Paper>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default AgriculturalQuestions;
