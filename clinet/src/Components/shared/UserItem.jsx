import React, { memo } from "react";
import { ListItem, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Remove as RemoveIcon } from "@mui/icons-material";

const UserItem = ({ user, handler, handlerIsLoading,isAdded=false }) => {
  const { name, _id, avater } = user;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar />
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              color: "black",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {name}
          </Typography>

          <IconButton
            size="small"
            sx={{
              bgcolor: isAdded?"error.main":"primary.main",
              color: "white",
              "&:hover": {
                bgcolor: isAdded?"error.main":"primary.dark",
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded?<RemoveIcon/>:<AddIcon />}
          </IconButton>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(UserItem);
