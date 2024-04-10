import React, { useState } from "react";
import {
  Dialog,
  TextField,
  DialogTitle,
  Stack,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";


const Search = () => {
  const [users,setUsers]=useState(sampleUsers)
  let isLoadingSendFriendRequest=false
  const search = useInputValidation("");

const addFriendHandler=(id)=>{
  console.log(id);
}
  return (
    <Dialog open>
      <Stack p="2rem" direction={"column"} width={"25rem"}>
        <DialogTitle textAlign="center">Find Page</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users?.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
