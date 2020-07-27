import React, { useDispatch } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  Link,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify/icons-mdi/google";
import facebookIcon from "@iconify/icons-mdi/facebook";
import { Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

import NavBar from "../container/NavBar";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(20, "Password too long")
    .required("This field is required"),
});
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
  },
  paper: {
    display: "flex",
    padding: "30px",
    marginTop: theme.spacing(6),
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
    color: "white",
    backgroundColor: "#ac1c14",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0),
    "&:hover": {
      backgroundColor: "#ac1c14",
    },
  },
  signInHead: {
    fontSize: "2rem",
  },
  signUpLink: { fontFamily: "Roboto", textDecoration: "none", color: "black" },
  icons: {
    paddingRight: "0.5em",
    color: "#ac1c14",
  },
  socialLoginButton: {
    color: "#ac1c14",
    borderColor: "#ac1c14",
    marginBottom: theme.spacing(1),
  },
  text: {
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper elevation={5} className={classes.paper}>
            <Typography component="h1" className={classes.signInHead}>
              Sign In With
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                dispatch(values);
              }}
            >
              {({ errors, handleChange, touched }) => (
                <form className={classes.form}>
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
                        name="email"
                        variant="outlined"
                        fullWidth
                        label="Email Address"
                        type="text"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
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
                        type="password"
                        InputLabelProps={{
                          style: { color: "black" },
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
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
