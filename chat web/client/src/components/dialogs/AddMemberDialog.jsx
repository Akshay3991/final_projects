import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material"
import { sampleUsers } from "../../constants/sampleData"
import UserItem from "../shared/UserItem"
import { useState } from "react"
const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectMemberHandler = (id) => {
        setSelectedMembers((prev) => (prev.includes(id) ? prev.filter((currelement) => currelement !== id) : [...prev, id]));
    }

    const addMemberSubmitHandler = () => {
        closeHandler();
    }
    const closeHandler = () => {
        setSelectedMembers([])
        setMembers([])
    }
    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
            </Stack>
            <Stack spacing={"1rem"}>
                {members.length > 0 ?
                    (members.map((i) => (
                        <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
                    ))) : (
                        <Typography textAlign={"center"}>No Friends</Typography>
                    )
                }
            </Stack>
            <Stack>
                <Button color="error" onClick={closeHandler}>Cancel</Button>
                <Button onClick={addMemberSubmitHandler} variant="contained" disabled={isLoadingAddMember}>Submit Changes</Button>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog