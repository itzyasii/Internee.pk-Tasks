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

function ChatBoxHeader() {
  return (
    <Card
      sx={{
        borderRadius: 0,
      }}
      elevation={0}
    >
      <CardHeader
        avatar={
          <>
            <Button sx={{minWidth:"auto", mr:1}}>
              <ArrowBackIcon />
            </Button>

            <Avatar>Y</Avatar>
          </>
        }
        action={
          <>
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <IconButton>
              <CallIcon />
            </IconButton>
          </>
        }
        title="Tasbeel Jawed"
        subheader={
          <Typography variant="subtitle2">Django Developer</Typography>
        }
      />
    </Card>
  );
}

export default ChatBoxHeader;
