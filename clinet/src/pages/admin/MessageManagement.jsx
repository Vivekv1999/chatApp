// @ts-nocheck
import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/layOut/AdminLayout";
import { Avatar, Box, Stack } from "@mui/material";
import Table from "../../Components/shared/Table";
import { dashboardData } from "../../constants/sampleData";
import { fileFormat, transfromImage } from "../../lib/features";
import moment from "moment";
import RenderAttchment from "../../Components/shared/RenderAttchment";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params?.row;
      return attachments?.length > 0
        ? attachments.map((d) => {
            const url = d.url;
            const file = fileFormat(url);
            return (
              <Box>
                <a
                  href={url}
                  download
                  target="_blank"
                  style={{
                    color: "black",
                  }}
                >
                  {RenderAttchment(file, url)}
                </a>
              </Box>
            );
          })
        : "No Attachments";
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "GroupChat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 100,
  },
];
const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData?.messages?.map((v) => ({
        ...v,
        id: v._id,
        sender: {
          name: v.sender.name,
          avatar: transfromImage(v.sender.avatar, 50),
        },
        createdAt: moment(v.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  );
};

export default MessageManagement;
