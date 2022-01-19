import {  Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from "../../Helpers/axios";


import React, { useEffect, useState } from 'react';




const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const obj = { email, password }
    
    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`/login/`, obj)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        
    }

    useEffect(() => {
        axios.get(`/login/`)
            .then(res => {
                console.log(res.data)
            })
    },[])
    

    useEffect(() => {
        if (localStorage.getItem('user-info')) {      
        }
            
    }, [])

 
    

    

    
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
                            onChange={(e) => setEmail(e.target.value)}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1, mt: 5 }} style={{ backgroundColor: '#5d9eba' }} type="submit"
                            onClick={onSubmit}
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
