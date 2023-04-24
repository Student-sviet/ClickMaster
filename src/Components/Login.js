import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const paperStyle = { padding: 20, height: '60vh', width: 280 }
    const avatarStyle = { backgroundColor: green }
    const linkUnStyle = {
        textDecoration: 'none'
    }
    const btnstyle = {
        margin: "20px auto"
    }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle} alt="Remy Sharp" src="C:\Users\Dell\OneDrive\Desktop\my pic.jpg" ><LockOutlinedIcon /></Avatar>
                        <h2> Sign In</h2>
                        <TextField id="filled-basic" label="Enter Username" variant="filled" color="success" fullWidth required />
                        <TextField id="filled-basic" label="Password" type='password' variant="filled" color="success"  fullWidth required />
                       
                    </Grid>
                    <Checkbox {...label} defaultChecked color="success" />Remember Me
                    <br /><Button style={btnstyle} type="submit" variant="contained" color="success" fullWidth>Sign In</Button>
                <Typography>
                    <Link style={linkUnStyle} href='#'>Forgot Password</Link>
                </Typography>
                <Typography> Already have an account
                    <Link style={ linkUnStyle} href='#'>Sign Up</Link>
                </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login


