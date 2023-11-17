// OnlineUsersBox.js

import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const OnlineUsersBox = ({ onlineUsers }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Online Users
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {onlineUsers.length > 0 ? (
          onlineUsers.map((user) => (
            <Box
              key={user.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Avatar
                  alt={user.username}
                  src={user.avatar}
                  sx={{ margin: "4px" }}
                />
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{ marginLeft: "8px" }}
                >
                  {user.username}
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No users online
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default OnlineUsersBox;
