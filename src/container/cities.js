import React, { useState } from "react";
import csc from "country-state-city";
import { Grid, makeStyles, Select, MenuItem, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  searchBtn: {
    color: "white",

    backgroundColor: "#b40008",

    "&:hover": {
      backgroundColor: "#ef101a",
    },
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
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            id="gender"
            value={state}
            onChange={handleChaangeState}
          >
            <MenuItem value="" disabled>
              State
            </MenuItem>
            {stateList.map((val) => (
              <MenuItem key={val.id} value={val.id}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            id="gender"
            value={city}
            onChange={handleChaangeCity}
          >
            <MenuItem value="" disabled>
              Cities
            </MenuItem>
            {cityList.map((val) => (
              <MenuItem key={val.id} value={val.name}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            id="bloodGroup"
            value={bg}
            onChange={handleChangeBG}
          >
            <MenuItem value="" disabled>
              Blood Group
            </MenuItem>
            {BloodGroup.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Button variant="outlined" className={classes.searchBtn}>
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Cities;
