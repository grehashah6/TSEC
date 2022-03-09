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
import icon1 from '../images/SafetyAudit.png'
import icon2 from '../images/Loc.png'
import icon3 from '../images/News.png'
import icon4 from '../images/Safe.png'
import icon5 from '../images/fakeCall.png'
import icon6 from '../images/dashboard.png'
import { useState } from "react";
import { useNavigate } from "react-router";
import logo3 from '../images/logo3.png'
import logo2 from '../images/logo2.png'

export default function Dashboard(props) {
  let navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false
  });
  let [value, setValue] = useState({ link: '', phone_no: '' })



  const [show, setShow] = useState(false)
  const shareLocation = () => {

    console.log("first")
    var axios = require('axios');
    let data = { 'link': 'https://localhost:3000/tracker' }
    console.log(data)
    var config = {
      method: 'post',
      url: 'https://safestree.herokuapp.com/api/share-location',
      headers: {
        ...data.getHeaders()
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  }

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
            <img src={icon6} />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button key='Safety Audit' onClick={() => navigate(`/auditform`)} style={{ marginBottom: '8px' }}>
          <ListItemIcon>
            <img src={icon1} />
          </ListItemIcon>
          <ListItemText primary='Safety Audit' />
        </ListItem>
        <ListItem button key='Share Location' onClick={shareLocation} style={{ marginBottom: '8px' }}>
          <ListItemIcon>
            <img src={icon2} />
          </ListItemIcon>
          <ListItemText primary='Share Location' />
        </ListItem>
        <ListItem button key='Daily News' onClick={() => navigate(`/news`)} style={{ marginBottom: '8px' }}>
          <ListItemIcon>
            <img src={icon3} />
          </ListItemIcon>
          <ListItemText primary='Daily News' />
        </ListItem>
        <ListItem button key='Nearby Safe Spots' style={{ marginBottom: '8px' }}>
          <ListItemIcon>
            <img src={icon4} />
          </ListItemIcon>
          <ListItemText primary='Nearby Safe Spots' />
        </ListItem>
        <ListItem button key='call' onClick={() => navigate(`/fakecall`)} style={{ marginBottom: '8px' }}>
          <ListItemIcon>
            <img src={icon5} />
          </ListItemIcon>
          <ListItemText primary='Fake Call' />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div style={props.color === '#E02768' ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2%' } : { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2%', position: 'absolute', zIndex: '10', width: '95%' }}>
      {["left"].map((anchor) => (
        <>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={props.color === '#E02768' ? { color: '#E02768' } : { color: '#F1F1F1' }} /></Button>
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
