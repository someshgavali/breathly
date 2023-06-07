import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AlarmIcon from "@mui/icons-material/Alarm";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #00008b;
`;
const WrapperButtons = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const Button1 = styled(Button)`
  /* width: 25%; */
  color: black;
  text-transform: inherit;
`;
const MeditationTop = () => {
  return (
    <>
      <Paper elevation={5}>
        <Wrapper>
        <Link to="/">
            <NavigateBeforeIcon style={{ fontSize: "40px" }} />
          </Link>
          <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
            Mediation
          </Typography>
          <AlarmIcon style={{ fontSize: "30px" }} />
        </Wrapper>
        <WrapperButtons>
          <Link to="/meditation">
            <Button1 variant="text">All</Button1>
          </Link>
          <Link to="/meditation/nature">
            <Button1 variant="text">Nature</Button1>
          </Link>
          <Link to="/meditation/musical">
            <Button1 variant="text">Musical</Button1>
          </Link>
          <Link to="/meditation/category">
            <Button1 variant="text">Category</Button1>
          </Link>
        </WrapperButtons>
      </Paper>
    </>
  );
};

export default MeditationTop;
