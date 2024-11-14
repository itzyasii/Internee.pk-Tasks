import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

function HeaderSidebar({ user }) {
  return (
    <Card
      sx={{
        background:
          "linear-gradient(135deg, #FF6B6B, #FF9A8B, #B58EC4, #FFD27F )",
        borderRadius: 0,
        color: "#FFFF",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              boxShadow: 3,
              border: "1px solid ",
              background:
                "linear-gradient(135deg, rgba(255, 105, 180, 0.7), rgba(100, 149, 237, 0.7))",
              backgroundClip: "content-box",
            }}
          >
            {user?.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            sx={{ color: "primary.contrastText" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={user?.name}
        subheader={
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", fontStyle: "italic" }}
          >
            @{user?.username}
          </Typography>
        }
      />
    </Card>
  );
}

export default HeaderSidebar;
