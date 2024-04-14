// @ts-nocheck
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { bgGradient, mateBlack, textColorBlack } from "../constants/constants";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AvatarCard from "../Components/shared/AvatarCard";
import { sampleUsers, samplesChats } from "../constants/sampleData";
import { Link } from "../Components/styles/StyledComponent";
import UserItem from "../Components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../Components/dialogs/ConfirmDeleteDialog")
);
const AddMemberDilaog = lazy(() =>
  import("../Components/dialogs/AddMemberDilaog")
);

const isAddMember = false;
const Groups = () => {
  const navigate = useNavigate();
  const chatId = useSearchParams()[0]?.get("group");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("Group Name");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

  const navigateBack = () => {
    navigate("/");
  };
  const handlMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handlMobileClose = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const upDateGroupName = () => {
    setIsEdit(false);
  };
  const [conFirmDeleteDialog, setConFirmDeleteDialog] = useState(false);

  const openConfirmDeletHandler = () => {
    setConFirmDeleteDialog(true);
    console.log("delet Group");
  };

  const closeConfirmDeletHandler = () => {
    setConFirmDeleteDialog(false);
    console.log("delet Group");
  };

  const openAddMemberHandler = () => {};
  const deleteHandler = () => {};

  const removeMemberHandler = (id) => {
    console.log("remove ", id);
  };
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "noen",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handlMobile}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "2rem",
            bgcolor: mateBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={() => upDateGroupName(false)}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4" color={textColorBlack}>
            {groupName}
          </Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing="1rem"
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeletHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        // bgcolor={"bisque"}
      >
        <GroupList myGroups={samplesChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem 3rem",
          position: "relative",
        }}
      >
        <>
          {IconBtns}
          {groupName && (
            <>
              {GroupName}

              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant={textColorBlack}
              >
                Members
              </Typography>
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                // bgcolor={"bisque"}
                height={"50vh"}
                overflow={"auto"}
              >
                {sampleUsers.length > 0 &&
                  sampleUsers.map((i) => (
                    <UserItem
                      user={i}
                      key={i._id}
                      isAdded
                      styling={{
                        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                        padding: "0.6rem 1rem",
                        borderRadius: "1rem",
                      }}
                      handler={removeMemberHandler}
                    />
                  ))}
              </Stack>
              {ButtonGroup}
            </>
          )}
        </>
      </Grid>
      {isAddMember && (
        <>
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDilaog
            // open={conFirmDeleteDialog}
            // handleClose={closeConfirmDeletHandler}
            // deleteHandler={deleteHandler}
            />
          </Suspense>
        </>
      )}
      {conFirmDeleteDialog && (
        <>
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog
              open={conFirmDeleteDialog}
              handleClose={closeConfirmDeletHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        </>
      )}
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handlMobileClose}
      >
        <GroupList w={"50vw"} myGroups={samplesChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack
      width={w}
      sx={{
        backgroundImage: bgGradient,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GrouplistItem key={group._id} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={"center"} padding="1rem" color={textColorBlack}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GrouplistItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography color={textColorBlack}>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
