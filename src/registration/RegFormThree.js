import React from "react";
import { Typography, Grid, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
   
 },
  tColor: {
    color: "white",
  },
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "White !important",
  },
}))
const RegFormThree = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom>
              Contact Details
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              autoComplete="off"
              required
              id="address1"
              name="address1"
              placeholder="House Number/Flat Number/Soci"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="address2"
              name="address2"
              placeholder="Street Address, Landmark"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="city"
              name="city"
              placeholder="City"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="district"
              name="district"
              placeholder="District"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="zip"
              name="zip"
              placeholder="Zip / Pin code"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="state"
              name="state"
              placeholder="State"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="phone"
              name="phone"
              placeholder="Phone"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="email"
              name="email"
              placeholder="Email"
              fullWidth
              variant="outlined"
              InputProps={{
                className: classes.tColor,
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              autoComplete="off"
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default RegFormThree;
