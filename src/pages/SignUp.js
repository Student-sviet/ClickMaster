import { Avatar, Grid, Paper, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
const paperStyle = { padding: '30px 20px', width:"30vw", margin: "20px auto" }
const avatarStyle = { backgroundColor: 'green' }
function SignUp() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const margintop = {
        marginTop: "15px "
    }
    const marginbottom ={
        marginBottom:"15px"
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineIcon /></Avatar>
                    <h2>Sign Up</h2>
                    <Typography style={marginbottom} variant='caption' gutterBottom>Please fill this form to make an account</Typography>
                </Grid>
                <form>
                    <TextField style={marginbottom} id="filled-basic" label="Enter Username" variant="filled" color="success" fullWidth required />
                  
                    <FormControl style={marginbottom}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange} style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField style={marginbottom} id="filled-basic" type='email' label='Email' variant="filled" color="success" fullWidth required />
                    <TextField style={marginbottom} id="filled-basic"  type='number' label='Phone Number'  variant="filled" color="success" fullWidth required />
                    <TextField style={marginbottom} id="filled-basic" type='password' label='Password' variant="filled" color="success" fullWidth required />
                    <TextField style={marginbottom} id="filled-basic" type='password' label='Confirm Password' variant="filled" color="success" fullWidth required />
                  
                    <Checkbox {...label} defaultChecked color="success" />I accept all the terms and condition <br/>
                    <Button style={margintop} type='submit' variant='contained' color='success' fullWidth>Sign Up</Button>

                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp
