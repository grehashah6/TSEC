import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { useState } from "react";
import { useNavigate } from "react-router";
import logo3 from '../assets/lightLogo.png'
import logo2 from '../assets/DarkLogo.png'

export default function Dashboard(props) {
    let navigate = useNavigate();
    const [state, setState] = React.useState({
        left: false
    });
    let [value, setValue] = useState({ link: '', phone_no: '' })



    const [show, setShow] = useState(false)


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key='Dashboard' onClick={() => navigate(`/dashboard`)} style={{ marginBottom: '8px' }}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItem>
                <ListItem button key='profile' onClick={() => navigate(`/profile`)} style={{ marginBottom: '8px' }}>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary='profile' />
                </ListItem>
                <ListItem button key='projectForm' style={{ marginBottom: '8px' }}>
                    <ListItemIcon>
                        <FormatIndentIncreaseIcon />
                    </ListItemIcon>
                    <ListItemText primary='Project Form' />
                </ListItem>

            </List>
        </Box>
    );

    return (
        <div style={props.color === '#E02768' ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2%' } : { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2%', position: 'absolute', zIndex: '10', width: '95%' }}>
            {["left"].map((anchor) => (
                <>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={props.color === 'white' ? { color: 'black' } : { color: '#F1F1F1' }} /></Button>
                    <Drawer
                        anchor="left"
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </>
            ))}
            <img src={props.color === '#E02768' ? logo3 : logo2} />
        </div>
    );
}
