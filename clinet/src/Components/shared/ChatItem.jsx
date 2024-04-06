import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const ChatItem = ({
  index,
  newMessageAlerrt,
  isOnline,
  avatar = [],
  name,
  gropupChat,
  sameSender,
  _id,
  key,
  handleDeleteChat,
}) => {
  return (
    <>
      <Link
      sx={{padding:0}}
       to={`/chat/${_id}`} onContextMenu={(e)=> handleDeleteChat(e,_id,gropupChat)}/>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          gap: "1rem",
          position: "relative",
        }}
      >
        <Stack />
        <Typography>{name}</Typography>
        {newMessageAlerrt && (
          <Typography>{newMessageAlerrt.count} New Message</Typography>
        )}
        {(
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
