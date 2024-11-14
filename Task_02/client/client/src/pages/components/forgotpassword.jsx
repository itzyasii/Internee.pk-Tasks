import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Forgotpassword() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/");
  });

  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Box container="true" sx={{ display: "flex", width: "100%" }}>
        <Box item="true" md={6}>
          <Paper
            sqaure="true"
            sx={{
              width: "100%",
              background:
                "linear-gradient(135deg, #FF5E5E, #FF88BB, #FFE29A, #A78BFA)",
              p: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              color: "#FFFFFF",
              fontSize: "1.5rem",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "500", textAlign: "center" }}
            >
              Chatter-Hub
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "100", textAlign: "center" }}
            >
              ChatterHub is a dynamic messaging platform built on the MERN stack
              by Yasir Ali, offering both one-to-one and Group chat experiences.
            </Typography>
          </Paper>
        </Box>

        <Box item="true" md={6} sx={{ display: "flex", mr: 2 }}>
          <Paper
            sqaure="true"
            sx={{
              width: "100%",
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              background: "rgba(255, 182, 193, 0.2)", // Light pastel pink with transparency
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "200",
                whiteSpace: "nowrap",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Forgot Password?
            </Typography>

            <TextField
              fullWidth
              id="email"
              label="Enter your Email"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                fontFamily: "Roboto, sans-serif",
                color: "#FFFFFF",
                padding: "10px 20px",
                borderRadius: "8px",
                backdropFilter: "blur(8px)",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                background:
                  "linear-gradient(135deg, #FF5E5E, #FF88BB, #FFE29A, #A78BFA)",
              }}
            >
              Submit
            </Button>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "primary.main",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  mr: 2,
                }}
                variant="body2"
                component={Link}
                to="/login"
              >
                Remembered Password?
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "primary.main",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                variant="body2"
                component={Link}
                to="/signup"
              >
                Don't have an Account? <u>Sign up</u>.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Forgotpassword;
