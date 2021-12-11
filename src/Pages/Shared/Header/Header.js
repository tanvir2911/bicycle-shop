import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Header = () => {
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
                            Dashboard
                        </Typography>
                        <Typography variant="h6" component="div" >
                            Explore
                        </Typography>
                    </Box>
                    <Button style={{ justifyContent: 'end' }} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;