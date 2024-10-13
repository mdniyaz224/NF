'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Apply To Speak', 'Register Now!', 'Contact Us'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TopNav(props: { window: any; }) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Container maxWidth="sm">
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

                <Box sx={{
                    color: '#000',
                    fontFamily: 'Georgia',
                    fontSize: '25px',
                    fontWeight: 'normal',
                    lineHeight: '26px',
                    textAlign: 'center',
                    padding: '10px',
                   
                }}>
                    <Typography variant="h6" textAlign='center'>
                        National
                    </Typography>
                    <Typography variant="h6" >
                        Student Safety and Security
                    </Typography>
                    <Typography variant="h6" textAlign='center'>
                        Conference & Workshop
                    </Typography>
                </Box>
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" sx={{backgroundColor:'#f3f6f5'}} >
                <Toolbar sx={{display:'flex',justifyContent:'space-around'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    </IconButton>
                    <Box
                    sx={{
                        color: '#000',
                        fontFamily: 'Georgia',
                        fontSize: '25px',
                        fontWeight: 'normal',
                        lineHeight: '26px',
                        textAlign: 'center',
                        padding: '10px',}}
                    >
                        <Typography variant="h6">
                            National

                        </Typography>
                        <Typography variant="h6"
                        sx={{fontWeight:900}}
                        >
                            Student Safety and Security
                        </Typography>
                        <Typography variant="h6">
                            Conference & Workshop
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000',fontWeight:300,fontSize:'14px',textTransform:'capitalize' }}>
                {item}
              </Button>
            ))}
          </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

TopNav.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default TopNav;
