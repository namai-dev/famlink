import React, { useState } from "react";
import ConnectHeader from "./ConnectHeader";
import { Box, Container, Grid } from "@mui/material";
import OnlineUsersBox from "./OnlineUsersBox";
import ChatList from "./ListCharts";
import { Route, Router, Routes } from "react-router-dom";
import ChatInterface from "./ChartInterface";
const Connect = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const handleSendMessage = (message) => {
    if (selectedChat) {
      const newMessage = { id: Date.now(), text: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };
  const onlineUsers = [
    { id: 1, username: "User1", avatar: "url_to_user1_avatar" },
    { id: 2, username: "User2", avatar: "url_to_user2_avatar" },
    { id: 3, username: "User3", avatar: "url_to_user3_avatar" },
    { id: 4, username: "User4", avatar: "url_to_user4_avatar" },
    { id: 5, username: "User5", avatar: "url_to_user5_avatar" },
    { id: 6, username: "User6", avatar: "url_to_user6_avatar" },
    { id: 7, username: "User7", avatar: "url_to_user7_avatar" },
    { id: 8, username: "User8", avatar: "url_to_user8_avatar" },
    { id: 9, username: "User9", avatar: "url_to_user9_avatar" },
    { id: 10, username: "User10", avatar: "url_to_user10_avatar" },
    { id: 11, username: "User11", avatar: "url_to_user11_avatar" },
    { id: 12, username: "User12", avatar: "url_to_user12_avatar" },
    // Add more users as needed
  ];

  const chatList = [
    {
      id: 1,
      name: "User1",
      avatar: "url_to_user1_avatar",
      lastMessage: "Hello there!",
    },
    {
      id: 2,
      name: "User2",
      avatar: "url_to_user2_avatar",
      lastMessage: "How are you?",
    },
    {
      id: 3,
      name: "User2",
      avatar: "url_to_user2_avatar",
      lastMessage: "How are you?",
    },
    {
      id: 4,
      name: "User2",
      avatar: "url_to_user2_avatar",
      lastMessage: "How are you?",
    },
    // Add more chats as needed
  ];
  return (
    <>
      <ConnectHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <OnlineUsersBox onlineUsers={onlineUsers} />
      </Box>

      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box>
                  <ChatList
                    chats={chatList}
                    onChatClick={(chat) => setSelectedChat(chat)}
                  />
                </Box>
                {selectedChat && (
                  <ChatInterface
                    selectedChat={selectedChat}
                    messages={messages}
                    onSendMessage={handleSendMessage}
                  />
                )}
              </>
            }
          />
        </Routes>
      </Box>

      {/* <Box>
          <ChatList
            chats={chatList}
            onChatClick={(chat) => setSelectedChat(chat)}
          />
        </Box>

        {selectedChat && <ChatInterface selectedChat={selectedChat} />}
      </Box> */}
    </>
  );
};

export default Connect;
