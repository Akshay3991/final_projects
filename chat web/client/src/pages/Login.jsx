import { useFileHandler, useInputValidation } from '6pp'
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { VisuallyHiddenInput } from "../components/styles/StyledComponent"
import { usernameValidator } from "../utils/validator"
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin((prev) => !prev)
    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    const password = useInputValidation("")
    // const password = useStrongPassword()
    const avatar = useFileHandler("single")


    const handleLogIn = (e) => {
        e.preventDefault();
    }
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (
        <div style={
            {
                backgroundImage: "linear-gradient(rgb(255 225 209), rgb(249 159 159)"
            }
        }
        >
            <Container component={'main'} maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>

                    {isLogin ? (
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form onSubmit={handleLogIn}
                                style={{
                                    width: "100%",
                                    marginTop: "1rem",
                                }}>
                                <TextField required value={username.value}
                                    onChange={username.changeHandler}
                                    fullWidth label="Username" margin="normal"
                                    variant="outlined">
                                </TextField>
                                {/* {
                                username.error && (
                                    <Typography color="error" variant="caption">{username.error}</Typography>
                                )
                            } */}
                                <TextField required value={password.value} onChange={password.changeHandler}
                                    fullWidth label="Password" type="password" margin="normal"
                                    variant="outlined">
                                </TextField>
                                <Button sx={{
                                    marginTop: "1rem"
                                }}
                                    fullWidth variant="contained" color="primary" type="submit">Login</Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button
                                    fullWidth variant="text" onClick={toggleLogin}>Sign Up Instead</Button>

                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5">Sign Up</Typography>
                            <form onSubmit={handleSignUp} style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}>
                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain"

                                    }}
                                        src={avatar.preview}
                                    />

                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0,0.7)",
                                            },
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon></CameraAltIcon>
                                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                {
                                    avatar.error && (
                                        <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant="caption">{avatar.error}</Typography>
                                    )
                                }
                                <TextField required value={name.value}
                                    onChange={name.changeHandler}
                                    fullWidth label="Name" margin="normal"
                                    variant="outlined">
                                </TextField>
                                <TextField required value={bio.value} onChange={bio.changeHandler}
                                    fullWidth label="Bio" margin="normal"
                                    variant="outlined">
                                </TextField>
                                <TextField required value={username.value} onChange={username.changeHandler}
                                    fullWidth label="Username" margin="normal"
                                    variant="outlined">
                                </TextField>
                                {
                                    username.error && (
                                        <Typography color="error" variant="caption">{username.error}</Typography>
                                    )
                                }
                                <TextField required value={password.value}
                                    onChange={password.changeHandler}
                                    fullWidth label="Password" type="password" margin="normal"
                                    variant="outlined">
                                </TextField>
                                {/* {
                                password.error && (
                                    <Typography color="error" variant="caption">{password.error}</Typography>
                                )
                            } */}
                                <Button sx={{
                                    marginTop: "1rem"
                                }}
                                    fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button
                                    fullWidth variant="text" onClick={toggleLogin}>Login Instead</Button>

                            </form>
                        </>
                    )}
                </Paper>
            </Container >
        </div>
    )
}

export default Login