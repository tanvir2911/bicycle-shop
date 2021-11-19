import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, loading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match!!");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
    }



    return (
        <div className="login-form">
            {!loading && <div>
                <h2>Register</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input type="text" name="name" onBlur={handleOnBlur} id="" placeholder="Your Name" />
                    <br />
                    <input type="email" name="email" onBlur={handleOnBlur} id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" onBlur={handleOnBlur} id="" placeholder="Password" />
                    <br />
                    <input type="password" name="password2" onBlur={handleOnBlur} id="" placeholder="Retype Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Registered? <NavLink to="/login">Please Login</NavLink></p>

            </div>}
            {loading && <h2>Loading</h2>}
            {user?.email && <h2>Congrats!! Successfully Registered.</h2>}
            {authError && <h2>{authError}</h2>}
        </div>
    );
};

export default Register;