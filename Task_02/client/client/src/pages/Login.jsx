import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Grid container>
        <Grid item md={6}>
          <Paper
            sqaure
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
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
        </Grid>

        <Grid item md={6}>
          <Paper
            sqaure
            sx={{
              p: 3,
              height: "100%",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "200" }}>
              Log in
            </Typography>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter Username"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button fullWidth variant="contained" sx={{}}>
              Log in
            </Button>
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
            >
              <Typography
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "primary.main",
                  cursor: "pointer",
                }}
                variant="body2"
                component={Link}
                to="/forgot-password"
              >
                Forgot Password?
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "primary.main",
                  cursor: "pointer",
                }}
                variant="body2"
                component={Link}
                to="/signup"
              >
                Don't have an Account? <u>Sign up</u>.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
