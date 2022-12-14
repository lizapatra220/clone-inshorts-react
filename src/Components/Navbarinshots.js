import React from "react";
import "./Navbarinshot.css";
import Humburgerinshots from "./Humburgerinshots";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Navbarinshots = ({ SetCategory }) => {
  return (
    <div className="nav">
      <div className="icons">
        <Humburgerinshots SetCategory={SetCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80"
        alt="logo"
      />
    </div>
  );
};

export default Navbarinshots;
