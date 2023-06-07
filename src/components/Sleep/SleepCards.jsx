import React from "react";
import Card from "@mui/material/Card";
import { sleepData } from "../../data";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const CardContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
  /* overflow: hidden; */
  background-color: #dbd8d8;
`;
const CardWrapper = styled(Card)`
  margin: 10px 20px;
`;
const MelodyWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const SleepCards = () => {
  return (
    <Grid container>
      <MelodyWrapper>
        <Link to="/melodies" style={{ textDecoration: "none", width: "50%" }}>
          <Button style={{ width: "100%" }} variant="contained">
            Melodies
          </Button>
        </Link>
      </MelodyWrapper>
      <CardContainer>
        {sleepData.map((item) => {
          return (
            <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
              <CardWrapper sx={{ maxWidth: 345 }}>
                <Link
                  to={`/sleepsongs/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{ fontSize: "20px" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.subTitle}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </CardWrapper>
            </Grid>
          );
        })}
      </CardContainer>
    </Grid>
  );
};

export default SleepCards;
