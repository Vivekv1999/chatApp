// @ts-nocheck
import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/layOut/AdminLayout";
import Table from "../../Components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transfromImage } from "../../lib/features";
import AvatarCard from "../../Components/shared/AvatarCard";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar avatar={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params?.row?.members}/>
    )
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Creator By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params?.row?.creator.name} src={params?.row?.creator.avatar}/>
        <span>{params?.row?.creator.name}</span>
      </Stack>
    )
  },
];


const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((v)=>({
        ...v,
        id:v._id,
        avatar:v.avatar.map((d)=>transfromImage(d,50)),
        members:v.members.map((d)=>transfromImage(d?.avatar,50)),
        creator:{
          name:v.creator.name,
          avatar:transfromImage(v.creator.avatar,50)
        }
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"ALl Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatManagement;
