import { Box, styled } from "@mui/material";
import { useState, useRef } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import { audioData } from "../../data";

const Container = styled(Box)`
  background-image: linear-gradient(
    1.8deg,
    rgba(0, 116, 117, 1) 50.2%,
    rgba(232, 232, 232, 1) 100%
  );
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Box1 = styled(Box)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 0 30px 10px orange inset;
  transition: width 2s, height 2s, transform 2s;
  cursor: pointer;
  :hover {
    transform: rotate(360deg);
  }
`;

const Circles = styled(Box)`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
`;

const MelodiesContents = () => {
  const audioRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState([]);

  const toggleAudio = (index) => {
    const audioRef = audioRefs.current[index];
    const updatedIsPlaying = [...isPlaying];
    updatedIsPlaying[index] = !updatedIsPlaying[index];

    if (updatedIsPlaying[index]) {
      audioRef.play();
    } else {
      audioRef.pause();
    }

    setIsPlaying(updatedIsPlaying);
  };

  return (
    <Container>
      <Circles>
        {audioData.map((song, index) => (
          <Box 
            key={index}
            className={`song-box ${isPlaying[index] ? "active" : ""}`}
            onClick={() => toggleAudio(index)}
            style={{ cursor: "pointer" }}
          >
            <Box1>{song.audiotitle}</Box1>

            <audio
              ref={(ref) => (audioRefs.current[index] = ref)}
              src={song.audio}
            />
          </Box>
        ))}
      </Circles>
      <Box style={{ width: "90%", margin: "auto" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Mixer
            </Typography>
          </AccordionSummary>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <AccordionDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography>Sound One</Typography>
              <Slider
                style={{ width: "90%" }}
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </AccordionDetails>
            <AccordionDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography>Sound One</Typography>
              <Slider
                style={{ width: "90%" }}
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </AccordionDetails>
          </Box>
        </Accordion>
      </Box>
    </Container>
  );
};

export default MelodiesContents;
