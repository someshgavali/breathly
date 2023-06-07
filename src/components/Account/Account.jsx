import { Box, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";
import SyncIcon from "@mui/icons-material/Sync";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

import Dialogs from "../Dialog/Dialog";

const SettingBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 5px;
  /* margin-left: 20px; */
  font-weight: 700;
  color: grey;
  text-decoration: none;
  cursor: pointer;
`;

const Item = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Listitem = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 10px;
  cursor: pointer;
`;
const Typo = styled(Typography)`
  margin-left: 20px;
`;
const DialogButton = styled(Typography)`
  margin-left: 75%;
`;
const Account = () => {
  return (
    <>
      <Link to="/setting" style={{ textDecoration: "none" }}>
        <SettingBox>
          <NavigateBeforeIcon style={{ fontSize: "30px" }} />
          <Typography>Account</Typography>
        </SettingBox>
      </Link>
      <List>
        <Item>
          <Listitem>
            <PersonIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Your Name</Typo>
          </Listitem>
          <Typography style={{ marginLeft: "75%" }}>Somesh Gavali</Typography>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <LogoutIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>You'r signed in as</Typo>
          </Listitem>
          <DialogButton>
            <Dialogs />
          </DialogButton>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <LockIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Change your password</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <SyncIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Sync with Google Fit</Typo>
          </Listitem>
          <Switch defaultChecked />
        </Item>
      </List>
    </>
  );
};

export default Account;
