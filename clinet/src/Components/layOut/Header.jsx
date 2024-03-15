import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constants/constants";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const handleMobile = () => {
    console.log("handle mobile");
  };

  return (
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
