import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, loading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }

    const handleGooglSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className="login-form">
            {!loading && <div>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" name="email" onChange={handleOnChange} id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" onChange={handleOnChange} id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to Bottle Shop? <NavLink to="/register">Create Account</NavLink></p>
                <br />
                <br />
                <p>----------- Or ------------</p>
                <button onClick={handleGooglSignIn} className="btn btn-warning">Google Sign In</button>
            </div>}
            {loading && <h2>Loading</h2>}
            {user?.email && <h2>Congrats!! Successfully Logged In.</h2>}
            {authError && <h2>{authError}</h2>}
        </div>
    );
};

export default Login;