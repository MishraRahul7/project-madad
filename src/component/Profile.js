import React, { useState, useEffect } from "react";
import { Grid, Typography, makeStyles, Paper, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, deleteUser } from "../actions";
import Spinner from "../container/Spinner";
import { SyncLoader } from "react-spinners";

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
  paddingGrid: { padding: "10px 0px 10px 0px" },
  Text: { fontSize: "1.1em", fontWeight: "bold" },
}));

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
    return <Spinner />;
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
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Name:&nbsp;</span>{" "}
                  {`${data.fname} ${data.lname}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Father's Name:&nbsp;</span>
                  {data.ftrname}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Date of Birth:&nbsp;</span>
                  {data.dob}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Age:&nbsp;</span>
                  {data.age}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Weight:&nbsp;</span>
                  {data.weight}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Gender:&nbsp;</span>
                  {data.gender}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Occupation:&nbsp;</span>
                  {data.occupation}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Blood Group:&nbsp;</span>
                  {data.bgroup}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Phone:&nbsp;</span>
                  {data.phone}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Email:&nbsp;</span>
                  {data.email}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>Address:&nbsp;</span>
                  {data.address}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>City:&nbsp;</span>
                  {data.city}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.paddingGrid}>
                  <span className={classes.Text}>State:&nbsp;</span>
                  {data.states}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} style={{ textAlign: "right" }}>
                <Typography>
                  <Button
                    className={classes.deleteButton}
                    type="submit"
                    disabled={loading}
                    onClick={async () => {
                      setLoading(true);
                      await dispatch(deleteUser());
                      setLoading(false);
                    }}
                  >
                    {loading ? (
                      <SyncLoader size={10} color={"#fff"} />
                    ) : (
                      <span>Delete</span>
                    )}
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
