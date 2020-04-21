import React, { useState } from "react";
import csc from "country-state-city";
import {
  Grid,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  gridItem: {},
}));

const Cities = () => {
  const classes = useStyles();
  const state = csc.getStatesOfCountry("101");
  const city = csc.getCitiesOfState(state["8"].id);
  console.log(city);

  const gender = ["Male", "Female", "Other"];
  const [gen, setGender] = useState(gender);
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={2}>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="gender"
            value={gen}
            onChange={handleChangeGender}
          >
            {gender.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <InputLabel id="demo-simple-select-label">Cities</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="gender"
            value={gen}
            onChange={handleChangeGender}
          >
            {gender.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </>
  );
};
export default Cities;
