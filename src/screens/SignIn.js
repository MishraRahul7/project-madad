import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  Typography,
  Grid,
  Link,
  TextField,
  Button,
  Avatar,
} from "@material-ui/core";
import NavBar from "../container/NavBar"
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    backgroundColor: "#EBEFF2",
  },
  paper: {
    marginTop: "100px",
    backgroundColor: "#101726",
    display: "flex",
    padding: "30px",
    borderRadius: "10px",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  signInBtn: {
    margin: theme.spacing(3, 0, 0),
    width: "10vw",
  },
  textcolor: {
    color: "white",
  },
  root: {
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

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center" alignItems="center">
        <NavBar />
        <Grid item xs={12} md={4} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" className={classes.textcolor}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  color="default"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  className={classes.root}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  className={classes.root}
                />
              </Grid>{" "}
              <Grid item xs={12} align="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="default"
                  className={classes.signInBtn}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>

            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signup" variant="body2" color="Default">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
