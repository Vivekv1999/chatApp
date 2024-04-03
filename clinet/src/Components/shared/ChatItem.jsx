import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  gropupChat,
  sameSender,
  newMessageAlerrt,
  index,
  handleDeleteChat,
  isOnline
}) => {
  return (
    <>
      <Link to={`/chat/${_id}`} onContextMenu={(e)=> handleDeleteChat(e,_id,gropupChat)}/>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          justifyContent: "center",
          gap: "1rem",
          position: "relative",
        }}
      >
        <Stack />
        <Typography>{name}</Typography>
        {newMessageAlerrt && (
          <Typography>{newMessageAlerrt.count} New Message</Typography>
        )}
        {isOnline &&(
          <Box sx={{
            width:"10px",
            height: "10px",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
          }}>

          </Box>
        )}
      </div>
    </>
  );
};

export default memo(ChatItem);
