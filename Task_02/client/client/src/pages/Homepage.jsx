import React from "react";
import { Paper } from "@mui/material";
import SideBar from "./components/sidebar/SideBar";
import ChatBox from "./components/chatbox/ChatBox";
import Profile from "./components/Profile";
function Homepage() {
  return (
    <Paper
      square
      elevation={0}
      sx={{ height: "100vh", display:"flex" }}
    >
      <SideBar />
      <ChatBox />
      <Profile />
    </Paper>
  );
}

export default Homepage;
