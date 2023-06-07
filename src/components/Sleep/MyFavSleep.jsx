// import React from "react";
import SleepTop from "./SleepTop";
import { Box, Grid, styled } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { sleepData } from "../../data";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  /* background-color: #dbd8d8; */
  text-align: center;
  width: 100%;
  height: 450px;
  padding-top: 20px;
  /* box-shadow: 5px 10px 20px #888888 inset; */
`;

const CardContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
  /* overflow: hidden; */
  /* background-color: #dbd8d8; */
`;
const CardWrapper = styled(Card)`
  margin: 10px 20px;
`;

const MyFavSleep = () => {
  return (
    <>
      <SleepTop />
      <Wrapper>
        {/* <Typography>My Favourite Work!!</Typography> */}
        <Grid container>
          <CardContainer>
            {sleepData.map((item) => {
              return (
                <>
                  {item.fav && (
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
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.subTitle}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Link>
                      </CardWrapper>
                    </Grid>
                  )}
                </>
              );
            })}
          </CardContainer>
        </Grid>
      </Wrapper>
    </>
  );
};

export default MyFavSleep;
