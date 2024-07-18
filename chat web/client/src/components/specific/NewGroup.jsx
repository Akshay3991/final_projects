import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';

const NewGroup = () => {
    const groupName = useInputValidation('');
    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectMemberHandler = (id) => {
        setSelectedMembers((prev) => (prev.includes(id) ? prev.filter((currelement) => currelement !== id) : [...prev, id]));
    }

    const submitHandler = () => {
        //sdofhosusp
    }
    const closeHandler = () => {
        //sdofhosusp
    }
    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"2rem"} width={"25rem"}>
                <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>
                <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
                <Typography variant='body1'>Members</Typography>
                <Stack>

                    {sampleUsers.map((i) => {
                        <UserItem user={i} key={i._id} handler={selectMemberHandler}
                            isAdded={selectedMembers.includes(i._id)}
                        />
                    })}
                </Stack>
                <Stack direction={"row"} justifyContent={"space-evenly"}>
                    <Button variant='outlined' color='error' size='large'>Cancel</Button>
                    <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroup