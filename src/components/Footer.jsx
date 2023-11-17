import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Connect with Farmlink
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          color="inherit"
          component={Link}
          href="https://github.com/your-github"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          href="https://linkedin.com/in/your-linkedin"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          href="https://wa.me/1234567890"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          href="https://twitter.com/your-twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          href="https://www.youtube.com/user/your-youtube"
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © {new Date().getFullYear()} Farmlink. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
