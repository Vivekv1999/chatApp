// @ts-nocheck
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { textColorBlack } from "../../constants/constants";

const AddMemberDilaog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMembeHandler = (id) => {
    setSelectedMembers((prev) => {
      return prev.includes(id)
        ? prev.filter((curr) => curr !== id)
        : [...prev, id];
    });
  };

  const closeHandler = () => {
    setMembers([])
    setSelectedMembers([])
  };
  const addMemberSubmitHndler = () => {
    closeHandler()
  };
  
  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} width={"20rem"} p={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members?.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMembeHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}color={textColorBlack}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHndler}
            variant="contained"
            disabled={isLoadingAddMember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDilaog;
