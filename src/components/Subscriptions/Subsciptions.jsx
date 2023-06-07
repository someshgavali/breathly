import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {  Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


const Subsciptions = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const toCommunity = () => {
  //   navigate("/subscriptions/cummunity");
  // };
  // const toPro = () => {
  //   navigate("/subscriptions/pro");
  // };
  // const toPremium = () => {
  //   navigate("/subscriptions/premium");
  // };

  return (
    <Paper elevation={5}>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Link to="/subscriptions/cummunity">
          <Tab
            label="Community"
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={0}
          />
        </Link>
        <Link to="/subscriptions/pro">
          <Tab
            label="Pro"
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={1}
          />
        </Link>
        <Link to="/subscriptions/premium">
          <Tab
            label="Premium"
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={2}
          />
          {/* <Button onClick={toCommunity}
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={0}
          >
            Community
          </Button>
       
       
          <Button onClick={toPro}
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={0}
          >
            Pro
          </Button>
 
        
          <Button onClick={toPremium}
            sx={{ pl: { md: 30, xs: 2 }, pr: { md: 25, xs: 2 } }}
            index={0}
          >
            Premium
          </Button> */}
        </Link>
      </Tabs>
    </Paper>
  );
};

export default Subsciptions;
