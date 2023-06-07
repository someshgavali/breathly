import { Box, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

const SettingBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 5px;
  /* margin-left: 20px; */
  font-weight: 700;
  color: grey;
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

const Setting = () => {
  return (
    <>
      <SettingBox>
        <Link to="/">
          <NavigateBeforeIcon style={{ fontSize: "30px", marginTop: "5px" }} />
        </Link>
        Settings
      </SettingBox>
      <List>
        <Item>
          <Listitem>
            <Link to="/account" style={{ textDecoration: "none" }}>
              <PersonAddIcon
                style={{
                  fontSize: "40px",
                  color: "blue",
                  padding: "10px",
                  borderRadius: "50%",
                  boxShadow: " 2px 1px 8px 1px #888888",
                }}
              />
            </Link>
            <Typo>Account</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <SubscriptionsIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Link
              to="/subscriptions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typo>Manage Subscription</Typo>
            </Link>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <DateRangeIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Reminders</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <DownloadIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Download over cellular</Typo>
          </Listitem>
          <Switch defaultChecked />
        </Item>
        <Item>
          <Listitem>
            <DarkModeOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Enable Dark Mode</Typo>
          </Listitem>
          <Switch />
        </Item>
        <Item>
          <Listitem>
            <DoNotDisturbAltOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Do not disturb</Typo>
          </Listitem>
          <Switch />
        </Item>
        <Item>
          <Listitem>
            <NotificationsActiveOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Push Notification</Typo>
          </Listitem>
          <Switch />
        </Item>
        <Item>
          <Listitem>
            <SupportAgentOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Support</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <InfoOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>About</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <LockOpenOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Privacy Policy</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
        <Item>
          <Listitem>
            <GavelOutlinedIcon
              style={{
                fontSize: "40px",
                color: "blue",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: " 2px 1px 8px 1px #888888",
              }}
            />
            <Typo>Terms & Conditions</Typo>
          </Listitem>
          <NavigateNextIcon />
        </Item>
      </List>
    </>
  );
};

export default Setting;
