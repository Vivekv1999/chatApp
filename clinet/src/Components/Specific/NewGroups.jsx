// @ts-nocheck
import React, { useState } from "react";
import {
  Dialog,
  TextField,
  DialogTitle,
  Stack,
  Typography,
  InputAdornment,
  Button,
  ListItem,
} from "@mui/material";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";
import { sampleUsers } from "../../constants/sampleData";

const NewGroups = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMembeHandler = (id) => {
    setSelectedMembers((prev) => {
      return prev.includes(id) ? prev.filter((curr) => curr !== id) : [...prev, id];
    });

  };

  const submitHandler = () => {};

  const closeHndler = () => {};
  return (
    <Dialog open onClose={closeHndler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant="h4">New Groups</DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography style={{ color: "#000000" }}>Members</Typography>

        <Stack>
          {members?.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMembeHandler} isAdded={selectedMembers.includes(i._id)}/>
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error" size="large">
            cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
