import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";

import React from "react";

function ChatBoxHeader({ roomData }) {
  return (
    <Card
      sx={{
        borderRadius: 0,
      }}
      elevation={0}
    >
      <CardHeader
        sx={{
          background:
            "linear-gradient(135deg, #FF6B6B, #FF9A8B, #FFD27F, #B58EC4)",
          color: "#ffff",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "200",
        }}
        avatar={
          <>
            <Button sx={{ minWidth: "auto", mr: 1 }}>
              <ArrowBackIcon />
            </Button>

            <Avatar
              sx={{
                boxShadow: 3,
                border: "1px solid ",
                background:
                  "linear-gradient(135deg, rgba(255, 105, 180, 0.7), rgba(100, 149, 237, 0.7))",
                backgroundClip: "content-box",
              }}
            >
              {roomData?.receiver?.name.charAt(0).toUpperCase()}
            </Avatar>
          </>
        }
        action={
          <>
            <IconButton
              sx={{
                backgroundColor: "#2196F3",
                color: "#FFFFFF",
                mr: 1,

                "&:hover": {
                  backgroundColor: "#1976D2",
                },
              }}
            >
              <VideoCallIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#4CAF50",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#388E3C",
                },
              }}
            >
              <CallIcon />
            </IconButton>
          </>
        }
        title={roomData?.receiver?.name}
        subheader={
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            @{roomData?.receiver?.username}
          </Typography>
        }
      />
    </Card>
  );
}

export default ChatBoxHeader;
