import { Box } from "@mui/material";
import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxArea from "./ChatBoxArea";

function ChatBox() {
  return (
    <Box sx={{ width: "50vw", display: "flex", height:"100%", flexDirection:"column" }}>
      <ChatBoxHeader/>
      <ChatBoxArea/>
      <ChatBoxFooter/>
    </Box>
  );
}

export default ChatBox;
