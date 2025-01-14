import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { Search, Notifications, MoreVert } from "@mui/icons-material";
import Logo from "../assets/Logo.svg";
import Profile from "../assets/Profile.svg";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          color: "#000",
          height: "7.8125rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: "50px" }} />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            style={{ fontWeight: "bold" }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              style={{ width: "300px", border: "none" }}
              variant="outlined"
              size="small"
              placeholder="Search here"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search style={{ color: "#FE634E" }} />
                  </IconButton>
                ),
              }}
              sx={{
                mr: 4,
                backgroundColor: "#FFF1E7",
                borderRadius: "5px",
                border: "none",
              }}
            />
            <IconButton style={{ marginRight: "2rem" }}>
              <Notifications style={{ color: "#FE634E" }} />
            </IconButton>
            <img
              src={Profile}
              style={{ borderRadius: "50%", border: "2px solid #FE634E" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
