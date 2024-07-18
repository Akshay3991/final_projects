import { useInputValidation } from "6pp"
import { Button, Container, Paper, TextField, Typography } from "@mui/material"
import { bgGradient } from "../../constants/color"
import { Navigate } from "react-router-dom";

const isAdmin = true;
const AdminLogin = () => {
    const secretKey = useInputValidation("")
    function submitHandler(e) {
        e.preventdefault();
    }
    if (isAdmin) return <Navigate to='/admin/dashboard' />
    return (
        <div style={
            {
                backgroundImage: bgGradient,
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

                    <Typography variant="h5">Admin Login</Typography>
                    <form onSubmit={submitHandler}
                        style={{
                            width: "100%",
                            marginTop: "1rem",
                        }}>

                        {/* {
                                username.error && (
                                    <Typography color="error" variant="caption">{username.error}</Typography>
                                )
                            } */}
                        <TextField required value={secretKey.value} onChange={secretKey.changeHandler}
                            fullWidth label="Secret Key" type="password" margin="normal"
                            variant="outlined">
                        </TextField>
                        <Button sx={{
                            marginTop: "1rem"
                        }}
                            fullWidth variant="contained" color="primary" type="submit">Login</Button>


                    </form>

                </Paper>
            </Container >
        </div>
    )
}

export default AdminLogin