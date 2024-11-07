import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
function Profile() {
  return <Box sx={{ height: "100%", background: "#ccc", width: "25vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>

    <Avatar src="/static/images/avatar/1.jpg" sx={{width:"156px", height:"156px",}}/>
    <Typography mt={3} variant="h4" sx={{textTransform:"uppercase", color:"primary.light"}}>
      Yasir Ali Pechuho
    </Typography>
    <Typography variant="subtitle1" >
      Full Stack Developer
    </Typography>
    <Typography variant="body2" >
      yasirpechuho1@gmail.com
    </Typography>
  </Box>;
}

export default Profile;
