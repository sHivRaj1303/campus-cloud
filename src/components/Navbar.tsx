import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{bgcolor:'#1f2937', position:'fixed'}} >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Campus Cloud
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
