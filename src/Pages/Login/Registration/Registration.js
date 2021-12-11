import { Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading } = useAuth();

    const history = useHistory()


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }

    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return;
        }
        else {
            registerUser(loginData.name, loginData.email, loginData.password, history)

        }
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h2">
                Register
            </Typography>
            {isLoading && <CircularProgress />}
            {!isLoading &&
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: '80%' }}
                        id="name"
                        label="Name"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <br />
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
                    <TextField
                        sx={{ width: '80%' }}
                        id="name"
                        label="Confirm Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <br />
                    <br />
                    <Button type="submit" sx={{ width: '80%' }} variant="contained">Register</Button>
                    <br />
                    <br />
                    <NavLink to="/login">Already Registered?? Login Here</NavLink>
                </form>}
        </Container>
    );
};

export default Registration;