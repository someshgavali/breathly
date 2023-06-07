import React from "react";
import Subsciptions from "./Subsciptions";
import { Box, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Premium = () => {
  return (
    <Box>
      <Subsciptions />
      <Container>
        <Typography style={{ margin: "20px 0px", fontSize: "13px" }}>
          Get started with breathly premium & enjoy the most advanced features
          of meditation, as well as the highest priority for support.
        </Typography>
        <Typography
          style={{ marginBottom: "10px", fontSize: "40px", color: "blue" }}
        >
          $25
          <span style={{ fontSize: "15px", color: "blue" }}>
            / Free forever
          </span>
        </Typography>
        <Button variant="contained">bye premium</Button>
      </Container>
    </Box>
  );
};

export default Premium;
