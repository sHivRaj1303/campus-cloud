// src/components/Navbar.jsx
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#1f2937", position: "fixed" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Campus Cloud
        </Typography>
        <Button color="inherit" component={Link} to="/student-dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
