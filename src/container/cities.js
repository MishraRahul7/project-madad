import React, { useState } from "react";
import csc from "country-state-city";
import {
  Grid,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  gridItem: { color: "blue" },
  fcontrol: {
  width: "20vw",
  },
}));

const Cities = () => {
  
const BloodGroup = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const classes = useStyles();
  const stateList = csc.getStatesOfCountry("101");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bg, setBloodGroup] = useState("");

  const cityList = csc.getCitiesOfState(state);

  const handleChaangeState = (event) => {
    setState(event.target.value);
  };

  const handleChaangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeBG = (event) => {
    setBloodGroup(event.target.value);
  };
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={4} md={4}>
          <FormControl className={classes.fcontrol}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="gender"
              value={state}
              onChange={handleChaangeState}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {stateList.map((val) => (
                <MenuItem key={val.id} value={val.id}>
                  {val.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl className={classes.fcontrol}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="gender"
              value={city}
              onChange={handleChaangeCity}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {cityList.map((val) => (
                <MenuItem key={val.id} value={val.name}>
                  {val.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl className={classes.fcontrol}>
            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="bloodGroup"
              value={bg}
              onChange={handleChangeBG}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {BloodGroup.map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
export default Cities;
