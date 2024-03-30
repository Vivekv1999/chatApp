import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

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
  handleDeleteChatOpen,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessagesAlert = newMessagesAlert.find(
          (child) => child === _id
        );

        const isOnline=members?.some((member)=>onlineUsers.includes(_id))

        return (
        <ChatItem 
        newMessagesAlert={newMessagesAlert}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        gropupChats={gropupChats}
        sameSender={chatId===_id}
        _id={_id}
        handleDeleteChatOpen={handleDeleteChatOpen}
        />
        )
      })}
    </Stack>
  );
};

export default ChatList;
