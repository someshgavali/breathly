import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Snackbar } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;
const SmallImg = styled("img")`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 2px solid blue;
  padding: 10px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  /* width: 25%; */
  margin-bottom: 10px;
`;

const FbButton = styled(Button)`
  margin-bottom: 15px;
  /* padding: 10px 20px; */
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
`;
const GoogleButton = styled(Button)`
  /* padding: 10px 20px; */
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
`;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;
const LoginButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  /* width: 25%; */
  margin-bottom: 10px;
`;
const LoginButton = styled(Button)`
  /* margin-bottom: 15px; */
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
`;
const ArrowIcon = styled(Box)`
  margin-right: 23%;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  padding-top: 2px;
  box-shadow: 1px 2px 10px #888888;
  cursor: pointer;
`;
const MainBox= styled(Box)`
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  justify-content: center;
`

const Signup = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Container>
      <MainBox sx={{width:{xs:"80%",sm:"60%",md:"30%"}}}>
        <ArrowIcon>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ArrowBackIcon />
          </Link>
        </ArrowIcon>
        <Box>
          <SmallImg
            src="https://breathlly.netlify.app/assets/logo.png"
            alt=""
            width={80}
          />
        </Box>
        <Box style={{ marginBottom: "15px" }}>
          <Typography style={{ fontSize: "25px", fontWeight: "700" }}>
            Create your account
          </Typography>
        </Box>
        <ButtonContainer>
          <FbButton variant="contained">
            <FacebookRoundedIcon
              style={{ marginRight: "1rem", fontSize: "30px" }}
            />
            Containe with facebook
          </FbButton>
          <GoogleButton variant="outlined">
            <img
              src="https://breathlly.netlify.app/assets/google.png"
              alt=""
              width={30}
              style={{ marginRight: "1rem", fontSize: "30px" }}
            />
            continue with google
          </GoogleButton>
        </ButtonContainer>
        <Box style={{ marginBottom: "10px" }}>
          <Typography style={{ color: "grey", fontWeight: "700" }}>
            OR LOG IN WITH EMAIL
          </Typography>
        </Box>
        <FormContainer>
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Name*"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Email Address*"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Password*"
            variant="outlined"
          />
        </FormContainer>
        <LoginButtonContainer>
          <LoginButton
            variant="contained"
            onClick={handleClick({
              vertical: "top",
              horizontal: "center",
            })}
          >
            GET STARTED
          </LoginButton>
          <Snackbar
            open={open}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            autoHideDuration={6000}
            onClose={handleClose}
            sx={{
              ".MuiSnackbarContent-root": {
                backgroundColor: "#e94412",
                textAlign: "center",
              },
              ".MuiSnackbarContent-message": {
                textAlign: "center",
                width: "100%",
                margin: "auto",
              },
            }}
            message="Please Enter Valid Details!!!"
          />
        </LoginButtonContainer>

        <Box>
          <Typography style={{ fontSize: "15px" }}>
            Already have an account?
            <Link to="/signup" style={{ fontWeight: "700", color: "#1976D2" }}>
              SIGN UP
            </Link>
          </Typography>
        </Box>
      </MainBox>
    </Container>
  );
};

export default Signup;
