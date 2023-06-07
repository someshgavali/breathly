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

const Pro = () => {
  return (
    <Box>
      <Subsciptions />
      <Container>
        <Typography style={{ margin: "20px 0px", fontSize: "13px" }}>
          Get started with breathly pro and enjoy lots of more features of
          meditation.
        </Typography>
        <Typography
          style={{ marginBottom: "10px", fontSize: "40px", color: "blue" }}
        >
          $15{" "}
          <span style={{ fontSize: "15px", color: "blue" }}>
            / Free forever
          </span>
        </Typography>
        <Button variant="contained">bye pro</Button>
      </Container>
    </Box>
  );
};

export default Pro;
