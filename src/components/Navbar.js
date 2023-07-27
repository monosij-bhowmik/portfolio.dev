import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import logo from "../app-logo.png";
import "../App.css";

const pages = ["about", "dev-portfolio", "travel-blog", "contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="secondary"
      position="fixed"
      sc={{ buttom: "auto", top: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            src={logo}
            className="app-desktop-logo"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      textTransform: "none",
                      color: "#f5f3f4",
                      textDecoration: "none",
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Mobile View */}
          {/* ToDo: Fix the logo issue in mobile device */}
          {/* <img src={logo} className="app-desktop-logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{
                    textTransform: "none",
                    color: "#f5f3f4",
                    textDecoration: "none",
                  }}
                  to={`/${page}`}
                >
                  {page.replace("-", " ")}
                </Link>
              </Button>
            ))}
          </Box>
          <SocialMediaLinks size="medium" color="primary" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
