import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "../styles/StyledComponent";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  index,
  newMessagesAlert,
  isOnline,
  avatar,
  name,
  gropupChat,
  sameSender,
  _id,
  // key,
  handleDeleteChat,
}) => {
  return (
    <>
      <Link
        sx={{ padding: 0 }}
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChat(e, _id, gropupChat)}
      >
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
          <AvatarCard avatar={avatar}/>
          <Stack>
            <Typography style={{color:sameSender ? "white" : "unset"}}>{name}</Typography>
            {newMessagesAlert && (
              <Typography>{newMessagesAlert.count} New Message</Typography>
            )}
          </Stack>

          {isOnline && (
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default memo(ChatItem);
