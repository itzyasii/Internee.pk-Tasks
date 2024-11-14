import { Box, Typography } from "@mui/material";
import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxArea from "./ChatBoxArea";

function ChatBox({ roomData, handleSendMessage, allMsgs, user, handleDelete }) {
  return (
    <Box
      sx={{
        width: "50vw",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        borderRight: "1px solid #ccc",
        overflow:"auto",
        background: 'rgba(230, 230, 250, 0.2)', // Light lavender with transparency
        backdropFilter: 'blur(8px)'
      }}
    >
      {roomData.room ? (
        <>
          <ChatBoxHeader roomData={roomData} />
          <ChatBoxArea allMsgs={allMsgs} user={user} handleDelete={handleDelete} />
          <ChatBoxFooter handleSendMessage={handleSendMessage} />
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography>Please Select user to Chat.</Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ChatBox;
