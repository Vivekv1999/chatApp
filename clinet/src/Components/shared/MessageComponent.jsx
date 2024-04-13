// @ts-nocheck
import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { textColorBlack } from "../../constants/constants";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttchment from "./RenderAttchment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const samSender = sender._id === user._id;
console.log(attachments);
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: samSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!samSender && (
        <Typography color={lightBlue} fontWeight={600} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography color={textColorBlack}>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attchment, index) => {
          const url = attchment.url;
          const file = fileFormat(url)
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{ color: textColorBlack }}
              >
                 {RenderAttchment(file,url)}
              </a>
            </Box>
          );
        })}
      <Typography variant="caption" color={"text.secodary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
