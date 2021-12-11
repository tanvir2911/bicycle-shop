import { Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, googleSignIn, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }

    const handleOnSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)


        e.preventDefault();
    }



    return (
        <Container>
            <Typography variant="h2">
                Sign In
            </Typography>
            {isLoading && <CircularProgress />}
            {!isLoading &&
                <form onSubmit={handleOnSubmit}>

                    <TextField
                        sx={{ width: '80%' }}
                        id="name"
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                        sx={{ width: '80%' }}
                        id="name"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" sx={{ width: '80%' }} variant="contained">Register</Button>
                    <br />
                    <br />
                    <NavLink to="/login">New User?? Register Here</NavLink>
                    <p>-----------------------------</p>
                    <Button onClick={() => googleSignIn(location, history)} variant="text">Sign In With Google</Button>
                </form>}
        </Container>
    );
};

export default Login;