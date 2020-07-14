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
import useFormValidation from "../container/useFormValidation";
const INITIAL_STATE = {
  email: "",
  password: "",
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    color: "black",
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
  text: {
    textDecoration: "none",
  },
  socialLoginButton: {
    color: "white",
    borderColor: "white",
    marginBottom: theme.spacing(1),
  },
}));

const SignIn = () => {
  const { handleChange, values } = useFormValidation(INITIAL_STATE);
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("authenticated", values.email, values.password);
  };

  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography component="h1" className={classes.signInHead}>
              Sign In With
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={6} align="right">
                  <Link href="/" className={classes.text} variant="body2">
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.socialLoginButton}
                    >
                      <Icon
                        height="2em"
                        className={classes.icons}
                        icon={facebookIcon}
                      />
                      Facebook
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href="/" className={classes.text} variant="body2">
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.socialLoginButton}
                    >
                      <Icon
                        height="2em"
                        className={classes.icons}
                        icon={googleIcon}
                      />
                      Google
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    color="default"
                    label="Email Address"
                    name="email"
                    id="email"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.email}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    className={classes.root}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
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
