import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Wrapper = styled(Box)`
  height: 100vh;
  text-align: center;
  background-color: #ffa99e;
`;
const Top = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
`;
const Audios = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Icons = styled(Box)`
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const Image = styled("img")`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: 2s;
  :hover {
    transform: rotateZ(360deg);
  }
`;

const Songs = () => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = data.find((item) => item.id === itemId);
  return (
    <Wrapper>
      <Top>
        <SelfImprovementIcon style={{ fontSize: "40px" }} />
        <Typography style={{ fontSize: "25px", fontWeight: "700" }}>
          {item.title}
        </Typography>
      </Top>
      <Box>
        <Image src={item.image} alt="Logo" />
      </Box>
      <Box>
        <Typography style={{ fontSize: "25px", fontWeight: "700" }}>
          Live From Space
        </Typography>
        <Typography style={{ fontWeight: "700", color: "grey" }}>
          Mr.Somesh Gavali
        </Typography>
      </Box>
      <Audios>
        {item.audio.map((aud) => (
          <audio style={{ margin: "10px 0px" }} src={aud} controls></audio>
        ))}
      </Audios>
      <Icons>
        <FavoriteBorderIcon />
        <PlaylistAddIcon />
        <AccessAlarmsIcon />
        <MoreVertIcon />
      </Icons>
    </Wrapper>
  );
};

export default Songs;
