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
                        <Avatar style={avatarStyle} alt="Remy Sharp" src="https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-1/311598113_103597312558147_5160948487245846848_n.jpg?stp=c0.6.160.160a_dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=BUJlWlqjvOIAX9mxs5N&_nc_ht=scontent.fixc2-1.fna&oh=00_AfBtBEHNDGjWO7AJaiJVezlVN6Dw1oQm7Q4D5VwMd9sl4g&oe=644B7B65" ><LockOutlinedIcon /></Avatar>
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


