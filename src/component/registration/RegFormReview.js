import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  message: {
    padding: "10px 0px 10px 0px",
    fontStyle: "italic",
  },
}));

const RegFormReview = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <Typography variant="h6">Registration Complete</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1" className={classes.message}>
            I am deeply touched and humbled by the show of support and
            compassion you gave through your blood donations.
          </Typography>
          <Typography style={{ fontWeight: "bold" }}>
            Your ID and PASSWORD successfully send to your email address.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1" align="center">
            Thank you for Registration.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormReview;
