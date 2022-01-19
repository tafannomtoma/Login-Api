import {  Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    

    

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container style={{margin:"30px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '600px' }} src="https://static.vecteezy.com/system/resources/previews/002/828/337/non_2x/office-worker-analyst-with-marketing-presentation-and-financial-charts-spot-illustration-for-website-vector.jpg" alt="" />
                </Grid>
                <Grid style={{ backgroundColor: "#ebfffd"}} item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Please Login
                    </Typography>
                    <form>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1, mt: 5 }} style={{ backgroundColor: '#5d9eba' }} type="submit"
                            variant="contained">Login</Button>
                        {/* <NavLink to="/register">
                            <Button
                                sx={{ width: '75%', m: 1, mt: 5 }}
                                variant="text">New User? please register</Button>
                        </NavLink> */}
                        
                    </form>
                </Grid>
                

            </Grid>
        </Container>
    );
};

export default Login;
