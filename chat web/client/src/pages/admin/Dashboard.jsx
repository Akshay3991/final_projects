import { Container, Paper, Stack, Typography, Box } from "@mui/material"
import AdminLayout from "../../components/layout/AdminLayout"
import { AdminPanelSettings as AdminPanelSettingsIcon } from "@mui/icons-material"
import moment from "moment"
import { SearchField } from "../../components/styles/StyledComponent"


const Dashboard = () => {

    const Appbar = (
        <Paper
            elevation={3}
            sx={{
                padding: "2rem", margin: "2rem 0", borderRadius: "1rem"
            }}>
            <Stack direction={"row"} alignItems={"center"}
                spacing={"1rem"}>
                <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
                <SearchField />
                <button>sdf</button>
                <Box flexGrow={1} />
                <Typography>
                    {moment().format('MMMM Do YYYY')}
                </Typography>
            </Stack>
        </Paper>
    )
    return (
        <AdminLayout>
            <Container component={"main"}>{Appbar}</Container>
        </AdminLayout>
    )
}

export default Dashboard