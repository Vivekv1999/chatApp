import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import * as yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { bgGradient } from "../../constants/constants";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin=false

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const secretKey = useInputValidation("");

  const submitHandler = () => {};

  if(isAdmin){return <Navigate to="/admin/dashboard" />;}
  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  type="password"
                  fullWidth
                  label="Secrect Key"
                  margin="normal"
                  name="password"
                  variant="outlined"
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Admin Login
                </Button>
              </form>
            </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
