import React, { useState } from "react";
import csc from "country-state-city";
import {
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

const RegFormThree = () => {
  const stateList = csc.getStatesOfCountry("101");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const cityList = csc.getCitiesOfState(state);
  const handleChaangeState = (event) => {
    setState(event.target.value);
  };

  const handleChaangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Contact Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "black" },
            }}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "black" },
            }}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            autoComplete="off"
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            value={state}
            onChange={handleChaangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
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
        <Grid item xs={12} md={6}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            value={city}
            onChange={handleChaangeCity}
            InputLabelProps={{
              style: { color: "black" },
            }}
          >
            <MenuItem value="" disabled>
              City
            </MenuItem>
            {cityList.map((val) => (
              <MenuItem key={val.id} value={val.id}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="zip"
            name="zip"
            label="Pin code"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "black" },
            }}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormThree;
