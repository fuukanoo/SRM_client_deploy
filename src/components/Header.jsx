// Header.jsx
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed" sx={{ top: 0, right: 0, left: 0 }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button color="inherit" component={Link} to="/candidates">
          候補者一覧
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
