import React from "react";
import Slider from "react-slick";
import { Card, Box, Typography } from "@mui/material";
import Image from "../../../images/signphoto.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LogoDev } from "@mui/icons-material";

const AutoScrollingCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const cardsData = [
    {
      title: "Ovacodo",
      content: "Lorem ipsum dolor sit amet.",
      image: Image,
    },
    {
      title: "Maize News",
      content: "Consectetur adipiscing elit.",
      image: Image,
    },
    {
      title: "Coffee",
      content: "Pellentesque habitant morbi tristique senectus.",
      image: Image,
    },
    {
      title: "Sugarcane",
      content: "Pellentesque habitant morbi tristique senectus.",
      image: Image,
    },
    // Add more cards as needed
  ];

  return (
    <Slider {...settings} sp>
      {cardsData.map((card, index) => (
        <div key={index}>
          <Card
            sx={{
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#2196F3", // Change this to your desired card background color
              color: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Typography variant="h6">{card.title}</Typography>
                <Typography>{card.content}</Typography>
              </Box>

              <Box>
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{
                    width: "50px", // Adjust the size as needed
                    height: "50px", // Adjust the size as needed
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default AutoScrollingCard;
