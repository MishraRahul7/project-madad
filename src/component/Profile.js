import React from "react";
import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Reglayout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  Regpaper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: "10px",
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  SubmitButton: {
    color: "white",
    backgroundColor: "#811C14",
    "&:hover": {
      backgroundColor: "#ac1c14",
    },
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <main className={classes.Reglayout}>
          <Paper elevation={5} className={classes.Regpaper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              style={{ paddingBottom: "10px" }}
            >
              Your Profile
            </Typography>
            <Grid container direction="row">
              <Grid item xs={12} md={4}>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography></Typography>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
