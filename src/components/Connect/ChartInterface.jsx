// Assuming your ChartInterface.js looks like this:

import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ChartInterface = ({ selectedChat, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "background.paper",
        boxShadow: 3,
        borderRadius: 1,
        marginBottom: 2,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {selectedChat.name}
      </Typography>

      <Box
        sx={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: 1,
          marginBottom: 2,
          padding: 2,
        }}
      >
        {messages.map((msg) => (
          <div key={msg.id}>
            <Typography variant="body1">{msg.text}</Typography>
            <hr
              style={{
                margin: "4px 0",
                border: "none",
                borderTop: "1px solid #ddd",
              }}
            />
          </div>
        ))}
      </Box>

      <Box sx={{ display: "flex" }}>
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ marginLeft: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChartInterface;
