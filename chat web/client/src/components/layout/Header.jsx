import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../constants/color'
import { useNavigate } from "react-router-dom"
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon, } from "@mui/icons-material"
import { Suspense, useState } from 'react'
import SearchDialog from "../specific/Search"
import { lazy } from 'react'


const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const SearchDialog = lazy(() => import("../specific/Search"))
    const NotificationDialog = lazy(() => import("../specific/Notifications"))
    const NewGroupDialog = lazy(() => import("../specific/NewGroup"))
    const navigate = useNavigate();
    const handleMobile = () => {
        setIsMobile((prev) => !prev)
    }
    const openSearch = () => {
        setIsSearch((prev) => !prev)
    }
    const openNewGroup = () => {
        setIsNewGroup((prev) => !prev)
    }
    const openNotification = () => {
        setIsNotification((prev) => !prev)
    }
    const navigateToGroup = () => navigate("/groups")
    const logoutHandler = () => {
        console.log("logoutHandler")
    }
    return <>
        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position='static' sx={{ bgcolor: orange }}>
                <Toolbar>
                    <Typography variant='h6' sx={{
                        display: { xs: "none", sm: "block" },
                    }}>
                        Line
                    </Typography>
                    <Box sx={{
                        display: { xs: "block", sm: "none" },
                    }}>
                        <IconButton color="inherit" size='large' onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                    }} ></Box>
                    <Box>
                        <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
                        <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                        <IconBtn title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />
                        <IconBtn title={"Notifications"} icon={<NotificationsIcon />} onClick={openNotification} />
                        <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />
                    </Box>

                </Toolbar>
            </AppBar>

        </Box>
        {
            isSearch && (
                <Suspense fallback={<Backdrop open />}>
                    <SearchDialog />
                </Suspense>
            )
        }
        {
            isNotification && (
                <Suspense fallback={<Backdrop open />}>
                    <NotificationDialog />
                </Suspense>
            )
        }
        {
            isNewGroup && (
                <Suspense fallback={<Backdrop open />}>
                    <NewGroupDialog />
                </Suspense>
            )
        }
    </>
}
const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size='large' onClick={onClick} >
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header