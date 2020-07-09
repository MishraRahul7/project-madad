import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify/icons-mdi/google";
import facebookIcon from "@iconify/icons-mdi/facebook";

import NavBar from "../container/NavBar";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
  },
  paper: {
    backgroundColor: "#b40008",
    display: "flex",
    padding: "30px",
    margin: "2em 0em 2em 0em",
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
    margin: theme.spacing(1, 0, 0),
  },
  signInHead: {
    color: "white",
    fontSize: "2rem",
  },
  signUpLink: { fontFamily: "Roboto", textDecoration: "none", color: "white" },
  icons: {
    paddingRight: "0.5em",
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
  socialLoginButton: {
    color: "white",
    borderColor: "white",
    marginBottom: theme.spacing(1),
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography component="h1" className={classes.signInHead}>
              Sign In With
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={6} align="right">
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.socialLoginButton}
                  >
                    <Link to="/" variant="body2">
                      <Icon
                        height="2em"
                        className={classes.icons}
                        icon={facebookIcon}
                      />
                    </Link>
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.socialLoginButton}
                  >
                    <Link to="/" variant="body2">
                      <Icon
                        height="2em"
                        className={classes.icons}
                        icon={googleIcon}
                      />
                    </Link>
                    Google
                  </Button>
                </Grid>
                <Grid item xs={12} md={12}>
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
                <Grid item xs={12} md={12}>
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
                </Grid>
                <Grid item xs={12} md={12} align="center">
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    variant="contained"
                    color="default"
                    className={classes.signInBtn}
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography className={classes.signUpLink} align="center">
                    OR
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} align="center">
                  <Link
                    to="/registration"
                    variant="body2"
                    className={classes.signUpLink}
                  >
                    Not a Donor? Sign Up Now
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
