import React from "react";
import Card from "@mui/material/Card";
import { data } from "../../data";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, styled, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const CardContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
  /* padding-top: 30px; */
  background-color: #dbd8d8;
`;
const CardWrapper = styled(Card)`
  margin: 10px 20px;
  /* width: 22%; */
`;
const MeditationCards = () => {
  return (
    <Box>
      <Grid container>
        <CardContainer>
          {data.map((item) => {
            return (
              <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
                <CardWrapper sx={{ maxWidth: 345 }}>
                  <Link to={`/songs/${item.id}`}  style={{textDecoration:"none",color:"inherit"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
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
    </Box>
  );
};

export default MeditationCards;
