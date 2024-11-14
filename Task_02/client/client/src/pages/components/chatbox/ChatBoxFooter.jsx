import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

function ChatBoxFooter({ handleSendMessage }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      handleSendMessage(message);
    }
    setMessage("");
  };

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
      <Box
        sx={{ display: "flex", flex: 1 }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Type your message"
          sx={{ "& .MuiInputBase-root": { borderRadius: 0, borderRight: 0 } }}
          value={message}
          onChange={handleChange}
        ></TextField>
        <Button
          type="submit"
          sx={{
            minWidth: "auto",
            borderRadius: 0,
            height: "100%",
            color: "#008080",
            borderColor: "#008080",
            "&:hover": {
              backgroundColor: "#e0f7f7",
              borderColor: "#006666",
            },
          }}
          variant="outlined"
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBoxFooter;
