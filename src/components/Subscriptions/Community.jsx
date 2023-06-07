import React from "react";
import Subsciptions from "./Subsciptions";
import { Box, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Community = () => {
  return (
    <Box>
      <Subsciptions />
      <Container>
        <Typography style={{ margin: "20px 0px", fontSize: "13px" }}>
          Get started with community. Enjoy free meditation at zero cost.
        </Typography>
        <Typography
          style={{ marginBottom: "10px", fontSize: "40px", color: "green" }}
        >
          $0{" "}
          <span style={{ fontSize: "15px", color: "green" }}>
            / Free forever
          </span>
        </Typography>
        <Link to="/">
          <Button variant="contained">Explore now</Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Community;
