import React from "react";

import { Box, Typography, styled } from "@mui/material";
import MeditationTop from "./MeditationTop";

const Wrapper = styled(Box)`
  /* background-color: #dbd8d8; */
  text-align: center;
  width: 100%;
  height: 450px;
  padding-top: 20px;
  box-shadow: 5px 10px 20px #888888 inset;
`;

const MeditationNature = () => {
  return (
    <>
      <MeditationTop />
      <Wrapper>
        <Typography>Nature Work!!</Typography>
      </Wrapper>
    </>
  );
};

export default MeditationNature;
