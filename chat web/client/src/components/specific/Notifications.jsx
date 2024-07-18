import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';

const Notifications = () => {
    const friendRequestHandler = ({ _id, accept }) => {
        // add friend request handler
    }
    return (
        <Dialog open>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle>Notification</DialogTitle>
                {
                    sampleNotifications.length > 0 ? (sampleNotifications.map((sender, _id) => <NotificationItem sender={sender} key={_id} _id={_id} handler={friendRequestHandler} />)) : (<Typography textAlign={"center"}>0 notifications</Typography>)
                }
            </Stack>
        </Dialog>
    )
}
const NotificationItem = memo(({ sender }) => {
    const { name, avatar } = sender;
    return (
        <ListItem>
            <Stack direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar src={avatar} />
                <Typography
                    variant="body1"
                    sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",

                    }}
                >{`${name} send you a friend request.`}</Typography>
                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                >
                    <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
                    <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>

                </Stack>
            </Stack>
        </ListItem>
    )
});
export default Notifications;