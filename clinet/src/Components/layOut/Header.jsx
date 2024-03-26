import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Search = lazy(() => import("../Specific/Search"));
const Notification = lazy(() => import("../Specific/Notification"));
const NewGroups = lazy(() => import("../Specific/NewGroups"));

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();
  const handleMobile = () => {
    setMobile((prev) => !prev);
    console.log("handle mobile");
  };

  const handleSearch = () => {
    setIsSearch((prev) => !prev);
    console.log("serach handlers");
  };

  const handleNewGroup = () => {
    setIsNewGroup((prev) => !prev);
    console.log("handle New Groups");
  };

  const handleNotifications = () => {
    setIsNotification((prev) => !prev);
  };

  const handleGroups = () => {
    console.log("groups");
    navigate("/groups");
  };

  const logOutHandler = () => {
    console.log("logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              V_Chat
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconWithTooltip
                title={"Search"}
                handleClick={handleSearch}
                icon={<SearchIcon />}
              />
              <IconWithTooltip
                title={"New Group"}
                handleClick={handleNewGroup}
                icon={<AddIcon />}
              />
              <IconWithTooltip
                title={"Manage Groups"}
                handleClick={handleGroups}
                icon={<GroupsIcon />}
              />
              <IconWithTooltip
                title={"Notifications"}
                handleClick={handleNotifications}
                icon={<NotificationsNoneIcon />}
              />
              <IconWithTooltip
                title={"Logout"}
                handleClick={logOutHandler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <Notification />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroups />
        </Suspense>
      )}
    </>
  );
};

const IconWithTooltip = ({ title, handleClick, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" onClick={handleClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
