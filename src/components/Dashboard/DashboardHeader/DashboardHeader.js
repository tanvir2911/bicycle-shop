import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './DashboardHeader.css';

const DashboardHeader = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav>
                <NavLink to="/payment">Pay</NavLink>
                <NavLink to="/myOrders">My Orders</NavLink>
                <NavLink to="/giveReview">Review</NavLink>


            </nav>
        </div>
    );
};

export default DashboardHeader;