import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../Specific/ChatList";
import { samplesChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";

const AppLayOuts = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {

    const params=useParams()
    const chatId=params.chatId

    const handleDeleteChat=(e,_id,gropupChat) => {
      console.log("delete chat");
    }

    return (
      <> 
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={samplesChats}
              chatId={chatId}
              newMessagesAlert={[]}
              handleDeleteChat={handleDeleteChat}
              onlineUsers={[]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            // bgcolor="primary.main"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", md: "block" } }}
            bgcolor="rgba(0,0,0,0.5)"
          >
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayOuts;
