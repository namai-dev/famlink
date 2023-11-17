// FriendCard.js

import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const FriendCard = ({ friend, onStartChat }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6">{friend.name}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onStartChat}
          sx={{ marginTop: 2 }}
        >
          Start Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default FriendCard;
