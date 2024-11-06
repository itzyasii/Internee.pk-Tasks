import React from "react";
import { Box, Button, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
function ChatBoxFooter() {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button sx={{ minWidth: "auto", mr: 1 }}>
          <MoreVertIcon />
        </Button>
        <Button sx={{ minWidth: "auto", mr: 1 }}>
          <EmojiEmotionsIcon />
        </Button>
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <TextField
          size="small"
          fullWidth
          placeholder="Type your message"
          sx={{ "& .MuiInputBase-root": { borderRadius: 0, borderRight: 0 } }}
        ></TextField>
        <Button
          sx={{ minWidth: "auto", borderRadius: 0, height: "100%" }}
          variant="outlined"
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBoxFooter;
