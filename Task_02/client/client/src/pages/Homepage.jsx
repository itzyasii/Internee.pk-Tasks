import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import SideBar from "./components/sidebar/SideBar";
import ChatBox from "./components/chatbox/ChatBox";
import Profile from "./components/Profile";
import socket from "../socket";
function Homepage() {
  useEffect(()=>{
    console.log(socket.id)
  }, [socket])
  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
      <SideBar />
      <ChatBox />
      <Profile />
    </Paper>
  );
}

export default Homepage;
