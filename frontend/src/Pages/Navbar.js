import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo2 from '../assets/lightLogo.png'
import logo3 from '../assets/DarkLogo.png'
import { useNavigate } from 'react-router';


const Navbar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={props.color === '#E02768' ? { zIndex: '10', backgroundColor: 'transparent', padding: '25px', boxShadow: 'none' } : { position: 'absolute', zIndex: '10', backgroundColor: 'transparent', padding: '25px', boxShadow: 'none' }}>
            <Container maxWidth="xl" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={props.color === '#E02768' ? logo3 : logo2} style={{ mr: 2, display: { xs: 'none', md: 'flex' } }}></img>
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }} />
                        </IconButton>
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => { navigate('/news') }} style={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }}>News</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => { navigate('/safetyspots') }} style={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }}>Nearby Safe Spots</Typography>
                            </MenuItem>
                        </Menu> */}
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={props.color === '#E02768' ? logo3 : logo2} style={{ mr: 2, display: { xs: 'none', md: 'flex' } }}></img>
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" onClick={() => { navigate('/news') }} style={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }}>News</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" onClick={() => { navigate('/safetyspots') }} style={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }}>Nearby Safe Spots</Typography>
                        </MenuItem>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;