import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem
} from '@mui/material'
import { getAuth } from 'firebase/auth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

const Navbar = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <AppBar
        position='static'
        color='transparent'
        sx={{
            padding: '10px'
        }}
        >
            <Toolbar>
                <Typography
                variant='body1'
                component='h2'
                fontFamily='Quicksand'
                sx={{
                    flexGrow: '1'
                }}
                >Saldo Akun : Rp.100.000</Typography>
                { user && (
                    <div>
                        <IconButton
                        size='large'
                        onClick={handleMenu}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;