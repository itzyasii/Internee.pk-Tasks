import React, { Fragment, useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import axios from "axios";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";

function SideBar({ user, onlineUsers, setRoomData, roomData, setAllMsgs }) {
  const [value, setValue] = useState(0);
  const authToken = sessionStorage?.getItem("token");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChatRoom = (user) => {
    setRoomData({
      ...roomData,
      room: "test",
      receiver: user,
    });

    axios
      .get(`http://localhost:5000/api/messages/get/${user?.userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, 
        },
      })
      .then((res) => {
        console.log(res);
        setAllMsgs(res.data.data);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  };
  return (
    <Box
      sx={{
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: "1px solid #ccc",
        overflow: "auto",
        background: "rgba(230, 230, 250, 0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <HeaderSidebar user={user} />

      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<ChatIcon />}
          fontSize="small"
          iconPosition="start"
          label="Chat List"
          sx={{ minHeight: "inherit" }}
        />
        <Tab
          icon={<PeopleAltIcon />}
          fontSize="medium"
          iconPosition="start"
          label="User List"
          sx={{ minHeight: "inherit" }}
        />
      </Tabs>
      {value === 0 && (
        <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
          {onlineUsers
            ?.filter((ele) => ele.userId !== user.userId)
            ?.map((item) => (
              <Fragment key={item.userId}>
                <ListItem
                  sx={{ cursor: "pointer" }}
                  alignItems="flex-start"
                  onClick={() => handleChatRoom(item)}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        boxShadow: 3,
                        border: "1px solid ",
                        background:
                          "linear-gradient(135deg, rgba(255, 105, 180, 0.7), rgba(100, 149, 237, 0.7))",
                        backgroundClip: "content-box",
                      }}
                    >
                      {item?.name?.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item?.name}
                    secondary={
                      <Typography
                        variant="caption"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        @{item?.username}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </Fragment>
            ))}
        </List>
      )}
      {value === 1 && <div>1</div>}
    </Box>
  );
}

export default SideBar;
