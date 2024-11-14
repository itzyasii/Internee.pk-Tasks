import React, { Fragment } from "react";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReplyIcon from "@mui/icons-material/Reply";


function ChatBoxArea({ allMsgs, user, handleDelete }) {

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
        {allMsgs.map((item) => (
          <Fragment key={item?.sender?.userId}>
            <ListItem
              sx={
                item?.sender?._id === user?.userId
                  ? { flexDirection: "row-reverse", mb: 2 }
                  : { mb: 2 }
              }
            >
              <Box
                sx={
                  item?.sender?._id === user?.userId
                    ? {
                        width: "80%",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }
                    : { width: "80%", display: "flex" }
                }
              >
                <ListItemAvatar
                  sx={
                    item?.sender?._id === user?.userId && {
                      display: "flex",
                      flexDirection: "row-reverse",
                    }
                  }
                >
                  <Avatar
                    sx={{
                      boxShadow: 3,
                      border: "1px solid",
                      background:
                        "linear-gradient(135deg, rgba(255, 105, 180, 0.7), rgba(100, 149, 237, 0.7))",
                      backgroundClip: "content-box",
                    }}
                  >
                    {item?.sender?.name.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <Paper
                  sx={
                    item?.sender?._id === user?.userId
                      ? {
                          width: "100%",
                          p: 1.5,
                          bgcolor: "primary.light",
                          color: "primary.contrastText",
                        }
                      : { width: "100%", p: 1.5 }
                  }
                >
                  <ListItemText
                    sx={{ m: 0 }}
                    primary={item?.sender?.name}
                    secondary={
                      <Typography
                        variant="caption"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {item?.message}
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">12:40 PM</Typography>
                    <Box>
                      <IconButton size="small">
                        <ReplyIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() =>{ handleDelete(item?._id)}}
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </ListItem>
          </Fragment>
        ))}
        {/* <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
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
                bgcolor: "#ccc",
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

              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">12:17 A.M</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem> */}
      </List>
    </Box>
  );
}

export default ChatBoxArea;
