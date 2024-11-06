import React, { useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
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
function SideBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <HeaderSidebar />

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
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Tasbeel Jawed"
              secondary={
                <Typography
                  variant="caption"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Hello There!
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
        </List>
      )}
      {value === 1 && <div>1</div>}
    </Box>
  );
}

export default SideBar;
