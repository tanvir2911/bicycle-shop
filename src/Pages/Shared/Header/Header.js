import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logoutUser } = useAuth();

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }} gap={2}>
                        <Typography variant="h6" component="div" >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">Home</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">Explore</NavLink>
                        </Typography>
                    </Box>
                    {user?.displayName ?
                        <Button onClick={logoutUser} style={{ justifyContent: 'end' }} color="inherit">Logout</Button>
                        :
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button style={{ justifyContent: 'end' }} color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;