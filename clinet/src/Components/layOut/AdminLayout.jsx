// @ts-nocheck
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  greyColor,
  mateBlack,
  textColorBlack,
} from "../../constants/constants";
import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp,
  Groups,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message,
  // close as closeIcon,
} from "@mui/icons-material";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";

const isAdmin = true;

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <Groups />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <Message />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();
  const logOutHandler = () => {
    console.log("logOut");
  };
  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        v_chat
      </Typography>
      <Stack spacing={"1rem"}>
        {adminTabs?.map((tab) => (
          <Link
            Key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: mateBlack,
                color: "white",
                ":hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography color={ location.pathname === tab.path ?"white":mateBlack} fontSize={"1rem"}>
                {tab.name}
              </Typography>
            </Stack>
          </Link>
        ))}
        <Link onClick={logOutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            {<ExitToApp />}
            <Typography color={mateBlack} fontSize={"1rem"}>
              Log Out
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setisMobile] = useState(false);

  const handleMoile = () => {
    setisMobile(!isMobile);
  };
  const handleClose = () => {
    setisMobile(false);
  };

  if (!isAdmin) return <Navigate to={"/admin/dashboard"} />

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMoile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid
        item
        xs={12}
        lg={3}
        md={4}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: greyColor }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
