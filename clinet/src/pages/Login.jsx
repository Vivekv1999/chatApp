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
import { VisuallyHidden } from "../Components/styles/StyledComponent";

// const schema=yup.object({
//   email:yup.string().email(),
//   password:yup.string().min(3).Required("Email Id is required")
// })

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const init={
    name:"",email:"", password:"", confirmPassword:""
  }
  const [formData,setFormData] = useState(init)

  const handleChange = (e) => {
    const {value}=e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [e.target.value]:value
      }
    })
  }
  return (
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
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%" }} onSubmit={() => {}}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                type="password"
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                variant="outlined"
                value={formData.password}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth="true"
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <Typography
                textAlign="center"
                style={{ fontSize: "0.8rem", marginTop: "0.8rem" }}
              >
                Or
              </Typography>
              <Button
                variant="text"
                color="primary"
                fullWidth="true"
                type="submit"
                onClick={() => {
                  toggleLogin();
                }}
              >
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <h2>sign up</h2>
            <form style={{ width: "100%" }} onSubmit={() => {}}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  sx={{ position: "absolute", right: 0, bottom: 0 }}
                >
                  <>
                  <label htmlFor="file-input">
                    <CameraAltIcon />
                    <VisuallyHidden type="file" id="file-input"/>
                  </label>
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                name="userName"
                label="Name"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                name="userEmail"
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                name="password"
                label="Password"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                name="ConfirmPassword"
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <Button
                className="mt-1"
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={() => {}}
              >
                Submit
              </Button>
              <Typography
                className="mt-5"
                textAlign="center"
                style={{ fontSize: "0.8rem", marginTop: "0.8rem" }}
              >
                Or
              </Typography>
              <Button
                variant="text"
                color="primary"
                fullWidth
                type="submit"
                onClick={() => {
                  toggleLogin();
                }}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
