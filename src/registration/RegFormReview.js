import React from "react";
import {
  makeStyles,
  CssBaseline,
  Typography,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  message: {
    padding:"10px 0px 10px 0px",
    fontStyle:"italic"
  }
}));

const RegFormReview = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <CssBaseline />
        <main className={classes.layout}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" align="center">
              Registration Complete
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1" className={classes.message}>
              I am deeply touched and humbled by the show of support and
              compassion you gave through your blood donations.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1" align="center">
              Thank you for Registration.
            </Typography>
          </Grid>
        </main>
      </Grid>
    </React.Fragment>
  );
};
export default RegFormReview;
