import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //const history = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ padding: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Link to={"/dashboard"}>
            <ListItemButton>
              <Typography color={"black"}>DashBoard</Typography>
            </ListItemButton>
          </Link>

          <Link to={"/connect"}>
            <ListItemButton>
              <Typography color={"black"}>Connect</Typography>
            </ListItemButton>
          </Link>
          <Link to={"/dashboard"}>
            <ListItemButton>
              <Typography color={"black"}>SmartFarm</Typography>
            </ListItemButton>
          </Link>
          <Link to={"/dashboard"}>
            <ListItemButton>
              <Typography color={"black"}>Market</Typography>
            </ListItemButton>
          </Link>
        </Box>
      </List>
      <Divider />
      <List>
        <Link to={"/signup"}>
          <ListItemButton>Login</ListItemButton>
        </Link>

        <Link to={"/register"}>
          <ListItemButton>Register</ListItemButton>
        </Link>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            //sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "green",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 4,
              paddingTop: 4,
            }}
          >
            <Typography variant="h4">FarmLink</Typography>
          </Box>
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Header;
