import React from "react";
import {
  AppBar,
  Box,
  // Drawer, Divider,
  IconButton,
  Button,
  // List, ListItem, ListItemButton, ListItemText, ListItemIcon,
  Toolbar,
  Typography,
  SwipeableDrawer,
} from "@mui/material";
// import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
import LeftSidebar from "./LeftSidebar";
// import { bgcolor } from "@mui/system";
import CodeIcon from "@mui/icons-material/Code";
// import NotificationIcon from '@mui/icons-material/Notifications';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Navbar() {
  const [state, setState] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Courses", "Interviews", "Help"];

  const toggleDrawer = (open) => (event) => {
    //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    //   }
    setState(open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const list = () => (
    <Box
      //   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <LeftSidebar />
      {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
    </Box>
  );

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ justifyItems: "center", alignItems: "center" }}>
          <IconButton
            sx={{
              display: { xs: "block", lg: "none" },
              backgroundColor: "#336389",
              borderRadius: "20%",
              py: 0.5,
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            sx={{
              display: { xs: "none", lg: "block" },
              backgroundColor: "#336389",
              borderRadius: "20%",
              py: 0.5,
            }}
          >
            <CodeIcon sx={{ color: "#fff" }} />
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
          <Typography sx={{ pl: 1, flexGrow: 1 }} variant="h6" component={"div"}>
            Codingvid
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <IconButton>
                <CircleNotificationsIcon sx={{color: '#fff'}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
