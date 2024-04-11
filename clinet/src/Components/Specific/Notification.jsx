import React from "react";
import {
  Dialog,
  TextField,
  DialogTitle,
  Stack,
  InputAdornment,
  List,
  ListItem,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { sampleNotifications } from "../../constants/sampleData";

const Notification = () => {
  const friendRequestHandler = ({ _id, accept }) => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifiactions</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications?.map(({ sander, _id }) => {
            return (
              <NotificationItem
                sander={sander}
                _id={_id}
                handler={friendRequestHandler}
                key={_id}
              />
            );
          })
        ) : (
          <Typography textAlign="center">0 Notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = ({ sander, _id, handler, key }) => {
  const { name, avatar } = sander;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />
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
          {`${name} send you a friend request`}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default Notification;
