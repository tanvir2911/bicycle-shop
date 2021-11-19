import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <h1 className="logo bg-dark mb-0"  >Bottle Shop</h1>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/explore">Explore</NavLink>

                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user?.email ?
                        <button className="text-dark" onClick={logOut}>Logout</button>
                        :
                        <NavLink to="/login">
                            Login
                        </NavLink>}
                {!user?.email && <NavLink to="/register">
                    Register
                </NavLink>}
                {user?.email && <NavLink to="/dashboard">
                    Dashboard
                </NavLink>}
            </nav>
        </div>
    );
};

export default Header;