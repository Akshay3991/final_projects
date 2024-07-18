import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { orange, matBlack, bgGradient } from "../constants/color"
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material"
import { useNavigate, useSearchParams } from "react-router-dom"
import { lazy, memo, Suspense, useEffect, useState } from "react"
import { samplechats, sampleUsers } from "../constants/sampleData"
import AvatarCard from "../components/shared/AvatarCard"
import { Link } from "../components/styles/StyledComponent"
import UserItem from "../components/shared/UserItem"

const ConfirmDeleteDialog = lazy(() =>
    import("../components/dialogs/ConfirmDeleteDialog")
)
const AddMemberDialog = lazy(() =>
    import("../components/dialogs/AddMemberDialog")
)
const isAddMember = false;
const Groups = () => {
    const chatId = useSearchParams()[0].get("group");
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupNameUpdatedV, setGroupNameUpdatedV] = useState("");

    useEffect(() => {
        if (chatId) {
            setGroupName(`Group Name ${chatId}`)
            setGroupNameUpdatedV(`Group Name ${chatId}`)
        }
        return () => {
            setGroupName("")
            setGroupNameUpdatedV("")
            setIsEdit(false)
        }
    }, [chatId])
    const navigateBack = () => {
        navigate("/")
    };
    const handleMobile = () => {
        setIsMobileMenuOpen((prev) => !prev)
    };
    const handleMobileClose = () => setIsMobileMenuOpen(false);
    ////////////////////////////////////////////
    const updateGroupName = () => {
        setIsEdit(false);
    }
    const GroupName =
        <Stack direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={"1rem"}
            padding={"3rem"}
        >
            {
                isEdit ? (<>
                    <TextField value={groupNameUpdatedV} onChange={(e) => setGroupNameUpdatedV(e.target.value)} />
                    <IconButton onClick={updateGroupName}>
                        <DoneIcon />
                    </IconButton>
                </>) : (<>
                    <Typography variant="h4">{groupName}</Typography>
                    <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
                </>)
            }
        </Stack>

    ////////////////////////////////
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const openConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(true);
    }
    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(false);
    }
    const openAddMemberHandler = () => {

    }

    const deleteHandler = () => {

    }

    const ButtonGroup = <>
        <Stack
            direction={{
                xs: "column-reverse",
                sm: "row",
            }}
            spacing={"1rem"}
        >
            <Button size="large" color="error" variant="outlined" startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            > Delete Group</Button>
            <Button size="large" variant="contained" startIcon={<AddIcon />}
                onClick={openAddMemberHandler}
            > Add Member</Button>
        </Stack>
    </>
    //////////////////////////////
    const IconBtns = <>
        <Box sx={{
            display: {
                xs: "block",
                sm: "none",
                position: "fixed",
                right: "1rem",
                top: "1rem",
            },
        }}>
            <IconButton onClick={handleMobile}>
                <MenuIcon />
            </IconButton>
        </Box>
        <Tooltip title="back">
            <IconButton sx={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                bgcolor: matBlack,
                color: "white",
                ":hover": {
                    bgcolor: "rgba(0,0,0,0.7)"
                }
            }} onClick={navigateBack}
            >
                <KeyboardBackspaceIcon />
            </IconButton>
        </Tooltip>
    </>
    return (
        <>
            <Grid container height={"100vh"}>
                <Grid item
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                        // backgroundColor: bgGradient,
                    }}
                    sm={4}
                // bgcolor={orange}
                >
                    <GroupsList myGroups={samplechats} chatId={chatId} />

                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        padding: "1rem 3rem",
                    }}
                >
                    {IconBtns}
                    {groupName && <>
                        {GroupName}
                        <Typography
                            margin={"2rem"}
                            alignSelf={"flex-start"}
                            variant="body1"
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
                                md: "1rem 4rem"
                            }}
                            spacing={"2rem"}
                            height={"50vh"}
                            overflow={"auto"}

                        >
                            {/* members */}
                            {
                                sampleUsers.map((i) => (
                                    <UserItem user={i} isAdded key={i._id} styling={{
                                        boxShadow: "0 0 0.5rem 0.4rem rgba(0,0,0,0.2)",
                                        padding: "1rem 2rem",
                                        borderRadius: "1rem",

                                    }} />
                                ))
                            }
                        </Stack>
                        {ButtonGroup}
                    </>}
                </Grid>
                {isAddMember && (<Suspense fallback={<Backdrop open />}>
                    <AddMemberDialog />
                </Suspense>)
                }
                {confirmDeleteDialog && (
                    <Suspense fallback={<Backdrop open />}>
                        <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler}
                            deleteHandler={deleteHandler}
                        />
                    </Suspense>
                )}
                <Drawer sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                    },
                }} open={isMobileMenuOpen} onClose={handleMobileClose}>
                    <GroupsList w={"50vw"} myGroups={samplechats} chatId={chatId} />
                </Drawer>
            </Grid>
        </>
    )
}
const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
    <Stack width={w} bgcolor={orange} height={"100vh"}>
        {
            myGroups.length > 0 ? (
                myGroups.map((group) => <GroupListItems group={group} chatId={chatId} key={group._id} />)
            ) : (
                <Typography textAlign={"center"}>
                    No Groups
                </Typography>
            )
        }
    </Stack>
)
const GroupListItems = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    return (
        <Link to={`?group=${_id}`}
            onClick={(e) => {
                if (chatId === _id) e.preventDefault();
            }}
        >
            <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    )
})
export default Groups