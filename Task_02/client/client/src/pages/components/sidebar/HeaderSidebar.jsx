import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React  from "react";

function HeaderSidebar() {

  return (
    <Card
      sx={{
        bgcolor: "primary.main",
        borderRadius: 0,
        color: "primary.contrastText",
      }}
    >
      <CardHeader
        avatar={<Avatar>Y</Avatar>}
        action={
          <IconButton
            aria-label="settings"
            sx={{ color: "primary.contrastText" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Yasir Ali Pechuho"
        subheader={
          <Typography variant="subtitle2">Full Stack Developer</Typography>
        }
      />
    </Card>
  );
}

export default HeaderSidebar;
