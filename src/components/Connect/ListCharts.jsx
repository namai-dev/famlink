// ListCharts.js

import React from "react";
import {
  List,
  ListItem,
  Avatar,
  Typography,
  Divider,
  Link,
} from "@mui/material";

const ChatList = ({ chats, onChatClick }) => {
  return (
    <List>
      {chats.map((chat) => (
        <div key={chat.id}>
          <ListItem
            button
            component={Link}
            to="/connect/chat"
            onClick={() => onChatClick(chat)}
          >
            <Avatar alt={chat.name} src={chat.avatar} />
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="subtitle1">{chat.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {chat.lastMessage}
              </Typography>
            </div>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default ChatList;
