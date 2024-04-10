import React from "react";
import { Stack, Avatar,Typography } from "@mui/material";
import { Face as FaceIcon,AlternateEmail as UserNameIcon } from "@mui/icons-material";
import moment from "moment";


const Profile = () => {
  
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Sads jds lkdlf wlwed cildun"} />
      <ProfileCard heading={"Username"} text={"@UserName"} Icon={<UserNameIcon/>}/>
      <ProfileCard heading={"Name"} text={"Abhishek Nahar Singh"} Icon={<FaceIcon/>} />
      <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<FaceIcon/>} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    spacing={"1rem"}
    alignContent={"center"}
    color={"white"}
    textAlign={"center"}
    direction="row"
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
