import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SpaIcon from "@mui/icons-material/Spa";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <List></List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <HomeIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Sleep"
            icon={
              <Link to="/sleep" style={{ textDecoration: "none", color: "inherit" }}>
                <NightlightIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Meditation"
            icon={
              <Link to="/meditation" style={{ textDecoration: "none", color: "inherit" }}>
                <SpaIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Relax"
            icon={
              <Link to="/relax" style={{ textDecoration: "none", color: "inherit" }}>
                <MusicNoteIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Setting"
            icon={
              <Link
                to="/setting"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <SettingsIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNavbar;
