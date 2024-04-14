import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";
import { bgGradient } from "../../constants/constants";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack
     width={w} 
     direction={"column"}
      overflow={"auto"}
       height={"100%"}
      //  sx={{
      //   backgroundImage:bgGradient
      //  }}
       >
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessagesAlertData = newMessagesAlert.find(
          (child) => child.chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <React.Fragment key={index}>
            <ChatItem
              index={index}
              newMessagesAlert={newMessagesAlertData}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
              gropupChat={groupChat}
              sameSender={chatId === _id}
              _id={_id}
              // key={_id}
              handleDeleteChat={handleDeleteChat}
            />
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

export default ChatList;
