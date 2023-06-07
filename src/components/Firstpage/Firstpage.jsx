import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #b4cde6;
  height: 100vh;
`;
const SmallImg = styled("img")`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 2px solid blue;
  padding: 10px;
`;
const LargeImg = styled("img")`
  height: 250px;
  width: 250px;
  border-radius: 50%;
`;

const ButtonBox = styled(Box)`
  width: 30%;
  margin-bottom: 10px;
`;
const Btn = styled(Button)`
  font-size: 15px;
  font-weight: 700;
  width: 30%;
  border-radius: 30px;
  padding: 10px;
`;

const Firstpage = () => {
  const navTo = useNavigate();
  return (
    // <Box>
    <Container>
      <Box>
        <SmallImg
          src="https://breathlly.netlify.app/assets/logo.png"
          alt="smallimg"
        />
      </Box>
      <Box>
        <LargeImg
          src="https://breathlly.netlify.app/assets/relax5.webp"
          alt="largeimg"
        />
      </Box>
      <Box>
        <h1>Breathings</h1>
      </Box>
      <Box style={{ margin: "10px" }}>
        <Typography style={{ fontSize: "15px", fontWeight: "700" }}>
          Mindful Breathing app
        </Typography>
      </Box>

      {/* <Button
          sx={{ width: { xs: "30%", md: "20%" } }}
          onClick={() => navTo("/signup")}
          variant="contained"
        >
          Sign Up
        </Button> */}

      <ButtonBox>
        <Link to="/signup">
          <Btn
            style={{ margin: "10px" }}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Sign Up
          </Btn>
        </Link>
      </ButtonBox>
      <Box>
        <Typography style={{ fontSize: "15px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ fontWeight: "700", color: "#0D6EFD" }}>
            LOG IN
          </Link>
        </Typography>
      </Box>
    </Container>
    // </Box>
  );
};

export default Firstpage;
