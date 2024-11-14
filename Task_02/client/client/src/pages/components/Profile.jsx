import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Profile({ user }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        width: "25vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto",
        background: "rgba(230, 230, 250, 0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold", 
            letterSpacing: "0.1em", 
            color: "primary.main", 
            textTransform: "uppercase", 
            position: "relative", 
            "&::after": {
              content: '""',
              position: "absolute",
              width: "50px",
              height: "4px",
              backgroundColor: "primary.light", 
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          Profile
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Avatar
          src=""
          sx={{
            width: "156px",
            height: "156px",
            boxShadow: 3,
            border: "6px solid ",
            background:
              "linear-gradient(135deg, rgba(255, 105, 180, 0.7), rgba(100, 149, 237, 0.7))",
            backgroundClip: "content-box",
          }}
        />
        <Typography
          mt={3}
          variant="h4"
          sx={{
            textTransform: "uppercase",
            color: "primary.light",
            fontWeight: 600,
            letterSpacing: 1.5,
          }}
        >
          {user?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mb: 1,
          }}
        >
          @{user?.username}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            backgroundColor: "grey.100",
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          {user?.email}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 5,
            borderRadius: 5,
            color: "#D32F2F", // Red tone for logout action
            borderColor: "#D32F2F", // Match border with the text color
            "&:hover": {
              backgroundColor: "#FFEBEE", // Light red/pink for hover feedback
              borderColor: "#B71C1C", // Darker red for border on hover
            },
          }}
          onClick={() => {
            sessionStorage.clear();
            navigate("/login");
          }}
        >
          Log out &rarr;
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
