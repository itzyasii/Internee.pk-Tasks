import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("/api/users/register", data)
      .then((res) => {
        if (res.status === 201) navigate("/login");
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        setFormError(err.response.data);
      });
  };
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    document.title = "Sign up - Hello Messenger";
    if (token) navigate("/home");
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

        <Box
          item="true"
          md={6}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Paper
            sqaure="true"
            sx={{
              p: 3,
              height: "100%",
              background: "rgba(255, 182, 193, 0.2)", // Light pastel pink with transparency
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "200",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Sign up
            </Typography>

            <TextField
              fullWidth
              id="name"
              label="Enter your Name"
              variant="outlined"
              sx={{ mb: 3 }}
              {...register("name", {
                required: "This field is required",
              })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            />
            <TextField
              fullWidth
              id="email"
              label="Enter your Email"
              variant="outlined"
              sx={{ mb: 3 }}
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter Valid Email",
                },
                pattern: {
                  value:
                    /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "invalid Email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
            <TextField
              fullWidth
              id="username"
              label="Enter Username"
              variant="outlined"
              sx={{ mb: 3 }}
              {...register("username", {
                required: "This field is required",
              })}
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              sx={{ mb: 3 }}
              {...register("password", {
                required: "This field is required",
              })}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
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
              Sign up
            </Button>
            {formError && <Alert severity="error">{formError.error}</Alert>}
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
                  whiteSpace: "nowrap",
                }}
                variant="body2"
                component={Link}
                to="/login"
              >
                Already have an Account? <u>Log in</u>.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
