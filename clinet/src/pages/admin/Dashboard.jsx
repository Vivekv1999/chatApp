// @ts-nocheck
import React from "react";
import AdminLayout from "../../Components/layOut/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import {
  CurveButton,
  SearchField,
} from "../../Components/styles/StyledComponent";
import moment from "moment";
import { mateBlack, textColorBlack } from "../../constants/constants";
import { DoughnuCharts, LineChart } from "../../Components/Specific/Charts";

const Dashboard = () => {
  const Appbar = () => {
    return (
      <Paper
        elevation={3}
        sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
          <SearchField placeholder="Search..." />
          <CurveButton>Search</CurveButton>
          <Box flexGrow={1} />
          <Typography
            display={{
              md: "none",
              xs: "block",
            }}
            color={"rgba(0,0,0,0.7)"}
            textAlign={"center"}
          >
            {moment().format("dddd, D MMMM YYYY")}
          </Typography>
          <NotificationsIcon />
        </Stack>
      </Paper>
    );
  };

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={28} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={4} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={494} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        <Appbar />

        <Stack direction={{
          lg:"row",
          xs:'column',
        }}
         flexGrow={"wrap"}
         sx={{gap:"2rem"}}
         alignItems={{
          xs:'center',
          lg:'stretch'
         }}
        justifyContent={"center"}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1.4rem 1rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
              // height: "25rem",
            }}
          >
            <Typography margin={"2rem 0"} color={textColorBlack} variant="h4">
              Last Messages
            </Typography>
            <LineChart value={[1, 45, 33, 54, 48]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
              // height: "25rem",
            }}
          >
            <DoughnuCharts
              labels={["Single Chats", "Group Chats"]}
              value={[23, 71]}
            />

            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography color={textColorBlack}>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1.5rem",
        width: "20rem",
      }}
    >
      <Stack alignItems={"center"} spacing={"1rem"}>
        <Typography
          sx={{
            color: `${mateBlack}`,
            borderRadius: "50%",
            border: `5px solid ${mateBlack}`,
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {value}
        </Typography>
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
          {Icon}
          <Typography color={textColorBlack}>{title}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Dashboard;
