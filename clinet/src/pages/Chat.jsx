// @ts-nocheck
import React, { useRef } from "react";
import AppLayOuts from "../Components/layOut/AppLayOuts";
import { IconButton, Stack } from "@mui/material";
import { greyColor, orange } from "../constants/constants";
import { InputBox } from "../Components/styles/StyledComponent";
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon 
} from "@mui/icons-material";
import FileMenu from "../Components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../Components/shared/MessageComponent";


const user={
  _id:"asdfghj",
  name:"Nil"
}
const Chat = () => {
  const containerRef = useRef();

  return (
    <>
      <Stack
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={greyColor}
        ref={containerRef}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >

{sampleMessages.map((i,index)=>(
  <MessageComponent key={i+index} user={user} message={i}/>
))}


      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
         direction={"row"}
         height={"100%"}
         padding={"1rem"}
         alignItems={"center"}
         position={"relative"}
         >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg"
          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..."/>

          <IconButton
          type="submit"
          sx={{
            rotate: "-30deg",
            bgcolor:orange,
            color:"white",
            marginLeft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"error.dark",
            }

          }}
          >
            <SendIcon />
          </IconButton>
        </Stack>

        <FileMenu/>
      </form>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayOuts()(Chat);
