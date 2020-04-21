import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";

const RegFormThree = () => {
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h6" gutterBottom>
          Contact Details
        </Typography>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="House Number/Flat Number/Soci"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Street Address, Landmark"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="district" name="district" label="District" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Pin code"
            fullWidth
            autoComplete="pin code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="state"
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6}>
          <TextField
            requireds
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormThree;
