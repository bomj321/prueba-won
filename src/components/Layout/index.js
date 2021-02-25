import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Title, Nav, ButtonCustom } from "./styles";

export const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Nav>
        <Title> SLAB-CODE</Title>
        <ButtonCustom
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Usuario
        </ButtonCustom>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Anónimo</MenuItem>
          <MenuItem onClick={logout}>Desloguearse</MenuItem>
        </Menu>
      </Nav>
      {children}
    </>
  );
};
