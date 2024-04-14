// @ts-nocheck
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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { bgGradient } from "../constants/constants";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [imageFile, setImageFile] = useState();

  const validationShape = {
    email: yup.string().email().required(),
    password: yup.string().min(3).required("Password  is required"),
  }
  if (!isLogin) {
    validationShape.name = yup.string().min(2).required("name is required");
    validationShape.confirmPassword = yup
      .string()
      .oneOf([yup.ref("password"),null],"Confirm Password is must same as password")
  }

  const schema = yup.object().shape(validationShape);

  const init = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    // setValue,
    // watch,
    formState: { errors },
  } = useForm({
    defaultVales: init,
    resolver: yupResolver(schema),
  });

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const onSubmit = (data, e) => {
    console.log(data, "llllll", e);
  };
  console.log(errors, "error");
  return (
    <div style={{
      backgroundImage:bgGradient
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
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                variant="outlined"
                {...register("email")}
              />
              {errors?.email?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.email?.message}
                </span>
              )}
              <TextField
                required
                type="password"
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                variant="outlined"
                {...register("password")}
              />
              {errors?.password?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.password?.message}
                </span>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
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
                fullWidth
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
            <Typography variant="h5" className="mb-3">
              Sign up
            </Typography>
            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={imageFile}
                />
                <IconButton sx={{ position: "absolute", right: 0, bottom: 0,
                background:"black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:"white",
                padding: 0.5,
                ":hover":{
                  background:"black",
                }
                 }}>
                  <>
                    <span htmlFor="file-input" >
                      <CameraAltIcon />
                      <VisuallyHidden
                        type="file"
                        id="file-input"
                        data-max-size="1029" //sizein Byte
                        onChange={(e) =>{
                          console.log(e,"========eee>",e.target.files);
                          setImageFile(URL.createObjectURL(e.target.files[0]))
                        }}
                      />
                    </span>
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                name="name"
                label="Name"
                margin="normal"
                variant="outlined"
                fullWidth
                {...register("name")}
              />
              {errors?.name?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.name?.message}
                </span>
              )}
              <TextField
                required
                name="email"
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth
                {...register("email")}
              />
              {errors?.email?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.email?.message}
                </span>
              )}
              <TextField
                required
                type="password"
                name="password"
                label="Password"
                margin="normal"
                variant="outlined"
                fullWidth
                {...register("password")}
              />
              {errors?.password?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.password?.message}
                </span>
              )}
              <TextField
                required
                type="password"
                name="ConfirmPassword"
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                fullWidth
                {...register("ConfirmPassword")}
              />
              {errors?.ConfirmPassword?.message && (
                <span
                  style={{
                    color: "#f14040",
                    fontSize: "0.8rem",
                    marginTop: "0px",
                  }}
                >
                  {errors?.ConfirmPassword?.message}
                </span>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                style={{margin:"1rem 0"}}
              >
                Submit
              </Button>
              <Typography
                textAlign="center"
                style={{ fontSize: "0.8rem" }}
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
    </div>
  );
};

export default Login;
