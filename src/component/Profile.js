import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Paper,
  Button,
} from "@material-ui/core";

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
                <TextField
                  label="Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "Black" },
                  }}
                  value={`${data.fname} ${data.lname}`}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="Father's Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.ftrname}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Date of Birth"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.dob}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="Age"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.age}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Weight"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.weight}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="Gender"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.gender}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Occupation"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.occupation}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="Blood Group"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.bgroup}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.phone}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="Email"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.email}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Address"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.address}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="City"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.city}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingLeft: "10px" }}>
                <TextField
                  label="State"
                  margin="normal"
                  size="small"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  value={data.states}
                />
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
