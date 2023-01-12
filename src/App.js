import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setsi] = useState(0);
  const calculateintrest = () => {
    setsi((p * t * r) / 100);
  };
  return (
    <div className="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Intrest
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <TextField
        onChange={(event) => setP(event.target.value)}
        id="outlined-basic"
        label="Enter Principle"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(event) => setT(event.target.value)}
        id="outlined-basic"
        label="Enter Time"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(event) => setR(event.target.value)}
        id="outlined-basic"
        label="Enter Principle"
        variant="outlined"
      />
      <br /> <br />
      <Button onClick={() => calculateintrest()} variant="contained">
        Calculate
      </Button>
      <Typography variant="h6" gutterBottom component="div">
        <br />
        Simple Intrest is :{si}
      </Typography>
    </div>
  );
};

export default App;
