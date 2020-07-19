import React from "react";
// import csc from "country-state-city";
import { Typography, Grid, TextField } from "@material-ui/core";

const RegFormThree = () => {
  // const stateList = csc.getStatesOfCountry("101");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");

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
          <TextField
            id="state"
            name="state"
            label="State"
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
            id="district"
            name="district"
            label="District"
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
            required
            id="city"
            name="city"
            label="City"
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
            id="zip"
            name="zip"
            label="Zip / Pin code"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "black" },
            }}
            autoComplete="off"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormThree;
