import React from "react";
import { Typography, Grid, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  textfield: {
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
}));
const RegFormThree = () => {
  const classes = useStyles();
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
              style: { color: "white" },
            }}
            className={classes.textfield}
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
              style: { color: "white" },
            }}
            className={classes.textfield}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            autoComplete="off"
            id="address1"
            name="address1"
            label="House Number/Flat Number"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
            className={classes.textfield}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="address2"
            name="address2"
            label="Street Address, Landmark"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
            className={classes.textfield}
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
              style: { color: "white" },
            }}
            className={classes.textfield}
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
              style: { color: "white" },
            }}
            className={classes.textfield}
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
              style: { color: "white" },
            }}
            className={classes.textfield}
            autoComplete="off"
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
              style: { color: "white" },
            }}
            className={classes.textfield}
            autoComplete="off"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormThree;
