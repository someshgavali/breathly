import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";

const Container = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-bottom: 50px;
`;

const Image = styled("img")`
  width: 250px;
  border-radius: 50%;
  transition: 2s;
  :hover {
    transform: rotateY(180deg);
  }
`;

const Button1 = styled(Button)`
  margin: 10px 0px;
`;
const Button2 = styled(Button)`
  margin-bottom: 20px;
`;

const Home = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();

  let day = weekday[d.getDay()];
  const today = new Date();

  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const current = new Date();
  const Time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [userMsg, setUsermsg] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      setUsermsg("Good Morning");
    } else if (hours >= 12 && hours < 17) {
      setUsermsg("Good Afternoon");
    } else {
      setUsermsg("Good Evening");
    }
  }, [userMsg]);

  return (
    <Container>
      <h1 style={{ marginBottom: "20px" }}>{userMsg}, Dear</h1>

      <Button1 variant="outlined">
        {day} {date}
      </Button1>
      <Button2 variant="outlined">{Time} </Button2>

      <Image src="https://breathlly.netlify.app/assets/welcome.jpeg" alt="" />
    </Container>
  );
};

export default Home;
