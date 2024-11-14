import React, { useEffect, useRef, useState } from "react";
import { Paper } from "@mui/material";
import SideBar from "./components/sidebar/SideBar";
import ChatBox from "./components/chatbox/ChatBox";
import Profile from "./components/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
const PATH = "http://localhost:5000";

function Homepage() {
  const socketRef = useRef();
  const [isSocket, setSocketConnected] = useState();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [roomData, setRoomData] = useState({
    room: null,
  });
  const [allMsgs, setAllMsgs] = useState([]);

  const { state } = useLocation();
  const navigate = useNavigate();

  const expiryCheck = state?.exp;

  useEffect(() => {
    document.title = state?.name + "'s Chat page";
    if ((expiryCheck && Date.now() >= expiryCheck * 1000) || !state) {
      sessionStorage.clear();
      navigate("/login");
    }
    const socket = io.connect(PATH);
    socketRef.current = socket;
    socket.on("connect", () => setSocketConnected(true));
    socket.off("disconnect", () => setSocketConnected(false));
  }, [expiryCheck, navigate, state]);

  useEffect(() => {
    if (isSocket) {
      socketRef.current.emit("ADD_USER", state);
      socketRef.current.on("USER_ADDED", (data) => {
        setOnlineUsers(data);
      });
      socketRef.current.on("RECEIVE_MSG", (data) => {
        setAllMsgs((prevState) => [...prevState, data]);
      });

      socketRef.current.on("DELETED_MSG", (data) => {
        setAllMsgs((prevState) =>
          prevState.filter((item) => item._id !== data.message._id)
        );
      });

      return () => socketRef.current.disconnect();
    }
  }, [isSocket, state]);

  const handleSendMessage = (message) => {
    if (socketRef.current.connected) {
      let sender = state;
      sender.socketId = socketRef.current.id;
      const data = {
        message,
        receiver: roomData.receiver,
        sender,
      };
      socketRef.current.emit("SEND_MSG", data);
      // setAllMsgs((prevState) => [...prevState, data]);
    }
  };

  const handleDelete = (id) => {
    const authToken = sessionStorage?.getItem("token");

    axios
      .delete(`http://localhost:5000/api/messages/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Passing the auth token in the header
        },
      })
      .then((res) => {
        console.log(res);
        if (socketRef.current.connected) {
          const data = {
            message: res.data.data,
            receiver: roomData.receiver,
          };
          socketRef.current.emit("DELETE_MSG", data);
          setAllMsgs((prevState) =>
            prevState.filter((data) => data._id !== res.data.data._id)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
      <SideBar
        user={state}
        onlineUsers={onlineUsers}
        roomData={roomData}
        setRoomData={setRoomData}
        setAllMsgs={setAllMsgs}
      />
      <ChatBox
        roomData={roomData}
        handleSendMessage={handleSendMessage}
        allMsgs={allMsgs}
        user={state}
        handleDelete={handleDelete}
      />
      <Profile user={state} />
    </Paper>
  );
}

export default Homepage;
