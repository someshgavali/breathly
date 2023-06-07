import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const FooterContainer = styled(Box)`
  width: 100%;
  background-color: #26262d;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 10px 20px;
  color: white;
`;
const FooterHeading = styled(Box)`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
`;
const ListItem = styled("li")`
  margin: 10px 0;
`;
const FooterMainContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterBottom = styled(Box)`
  text-align: center;
  margin: 20px;
`;

const Footer = () => {
  return (
    
      <Box style={{ padding: " 0px 10px" }}>
        <FooterContainer>
          <FooterMainContainer>
            <Box>
              <FooterHeading>Daily Meditation</FooterHeading>
              <Divider color="white" />
              <Box>
                <ul style={{ listStyle: "none" }}>
                  <ListItem>Sleep</ListItem>
                  <ListItem>Relax</ListItem>
                  <ListItem>Calm</ListItem>
                  <ListItem>Mental Health</ListItem>
                </ul>
              </Box>
            </Box>
            <Box>
              <FooterHeading>Daily Meditation</FooterHeading>
              <Divider color="white" />
              <Box>
                <ul style={{ listStyle: "none" }}>
                  <ListItem>Sleep</ListItem>
                  <ListItem>Relax</ListItem>
                  <ListItem>Calm</ListItem>
                  <ListItem>Mental Health</ListItem>
                </ul>
              </Box>
            </Box>
            <Box>
              <FooterHeading>Daily Meditation</FooterHeading>
              <Divider color="white" />
              <Box>
                <ul style={{ listStyle: "none" }}>
                  <ListItem>Sleep</ListItem>
                  <ListItem>Relax</ListItem>
                  <ListItem>Calm</ListItem>
                  <ListItem>Mental Health</ListItem>
                </ul>
              </Box>
            </Box>
            <Box>
              <FooterHeading>Daily Meditation</FooterHeading>
              <Divider color="white" />
              <Box>
                <ul style={{ listStyle: "none" }}>
                  <ListItem>Sleep</ListItem>
                  <ListItem>Relax</ListItem>
                  <ListItem>Calm</ListItem>
                  <ListItem>Mental Health</ListItem>
                </ul>
              </Box>
            </Box>
          </FooterMainContainer>
          <Divider variant="middle" color="white" />
          <FooterBottom>
            <Typography style={{ marginBottom: "10px" }}>
              © 2023 Breathings. All Rights Reserved!
            </Typography>
            <Typography>Privacy Policy Cookie Policy</Typography>
          </FooterBottom>
        </FooterContainer>
      </Box>
   
  );
};

export default Footer;
