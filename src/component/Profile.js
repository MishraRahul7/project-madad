import React, { useState, useEffect } from "react";
import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, deleteUser } from "../actions";

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

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.user);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  useEffect(() => {
    if (!isSignedIn) {
      history.push("/");
    }
    if (isSignedIn) {
      dispatch(getUser());
    }
  }, [isSignedIn, history, dispatch]);
  if (!data) {
    return <div>Loading...</div>;
  }
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
                <Typography>
                  Name: {data.fname} {data.lname}
                </Typography>
                <Typography>Father's Name: {data.ftrname}</Typography>
                <Typography>Date of Birth: {data.dob}</Typography>

                <Typography>Age: {data.age}</Typography>
                <Typography>Weight: {data.weight}</Typography>
                <Typography>Gender: {data.gender}</Typography>
                <Typography>Occupation: {data.occupation}</Typography>
                <Typography>Blood Group: {data.bgroup}</Typography>
                <Typography>Phone: {data.phone}</Typography>
                <Typography>Email: {data.email}</Typography>
                <Typography>Address: {data.address}</Typography>
                <Typography>City: {data.city}</Typography>
                <Typography>State: {data.states}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
