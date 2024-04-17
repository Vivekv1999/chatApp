// @ts-nocheck
import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/layOut/AdminLayout";
import Table from "../../Components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transfromImage } from "../../lib/features";

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
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData?.users?.map((v) => ({
        ...v,
        id: v._id,
        avatar: transfromImage(v.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"ALl Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
