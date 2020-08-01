import React, { useEffect } from "react";
import { Grid, Typography, makeStyles, Paper, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, deleteUser, updateUser } from "../actions";

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
  saveButton: {
    color: "white",
    backgroundColor: "lightgreen",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  deleteButton: {
    color: "white",
    backgroundColor: "red",
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
                  <b>Name:</b> {data.fname} {data.lname}
                </Typography>
                <Typography>
                  <b>Father's Name:</b> {data.ftrname}
                </Typography>
                <Typography>
                  <b>Date of Birth:</b> {data.dob}
                </Typography>

                <Typography>
                  <b>Age:</b> {data.age}
                </Typography>
                <Typography>
                  <b>Weight:</b> {data.weight}
                </Typography>
                <Typography>
                  <b>Gender:</b> {data.gender}
                </Typography>
                <Typography>
                  <b>Occupation:</b> {data.occupation}
                </Typography>
                <Typography>
                  <b>Blood Group:</b>
                  {data.bgroup}
                </Typography>
                <Typography>
                  <b>Phone:</b> {data.phone}
                </Typography>
                <Typography>
                  <b>Email:</b> {data.email}
                </Typography>
                <Typography>
                  <b>Address: </b>
                  {data.address}
                </Typography>
                <Typography>
                  <b>City:</b> {data.city}
                </Typography>
                <Typography>
                  <b>State: </b>
                  {data.states}
                </Typography>
                <Typography>
                  <Button
                    className={classes.saveButton}
                    type="submit"
                    onClick={() => {
                      dispatch(updateUser());
                    }}
                  >
                    Save
                  </Button>
                  {"   "}
                  <Button
                    className={classes.deleteButton}
                    type="submit"
                    onClick={() => {
                      dispatch(deleteUser());
                    }}
                  >
                    Delete
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
