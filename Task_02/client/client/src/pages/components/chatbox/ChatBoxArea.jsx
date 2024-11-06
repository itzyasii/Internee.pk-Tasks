import React from "react";
import {
  Avatar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function ChatBoxArea() {
  return (
    <Box sx={{ flex: "1 0 0", overflowY: "auto", background: "#f9f9f9" }}>
      <Stack
        direction="row"
        justifyContent={"center"}
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "#f9f9f9",
        }}
      >
        <Chip label="Today" />
      </Stack>
      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ width: "80%", display: "flex" }}>
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Tasbeel Jawed"
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur voluptate a nulla, eius, recusandae numquam aperiam
                    inventore nam voluptatibus earum fuga eveniet molestiae
                    blanditiis! Minus quam cum laborum illum ratione? Nesciunt,
                    rerum porro. quidem.
                  </Typography>
                }
              />
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{ width: "80%", display: "flex", flexDirection: "row-reverse" }}
          >
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper
              sx={{
                width: "100%",
                p: 1.5,
                bgcolor: "primary.light",
                color: "primary.contrastText",
              }}
            >
              <ListItemText
                sx={{ m: 0 }}
                primary="Yasir Ali Pechuho"
                secondary={
                  <Typography variant="caption" sx={{ display: "inline" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur voluptate a nulla, eiu.
                  </Typography>
                }
              />
              <Box sx={{ mt: 1 }}>
                <Typography variant="caption">12:17 A.M</Typography>
                
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default ChatBoxArea;
