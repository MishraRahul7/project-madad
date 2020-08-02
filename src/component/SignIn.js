import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
  // Snackbar,
} from "@material-ui/core";

// import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { SyncLoader } from "react-spinners";
import * as Yup from "yup";
import { signIn } from "../actions";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(20, "Password too long")
    .required("This field is required"),
});
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  paper: {
    display: "flex",
    padding: "30px",
    marginTop: theme.spacing(6),
    borderRadius: "10px",
    flexDirection: "column",
    alignItems: "center",
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
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [open, setOpen] = useState(false);
  // const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const Alert = (props) => {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // };
  return (
    <div className={classes.mainContainer}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper elevation={5} className={classes.paper}>
            <Typography component="h1" className={classes.signInHead}>
              Sign In
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={async (values) => {
                setLoading(true);
                try {
                  await dispatch(signIn(values));
                  // setSuccess(true);
                  // setOpen(true);
                } catch (e) {
                  // setSuccess(false);
                  // setOpen(true);
                }
                setLoading(false);
              }}
            >
              {({ errors, handleChange, touched }) => (
                <Form className={classes.form}>
                  <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        name="email"
                        variant="outlined"
                        fullWidth
                        label="Email Address"
                        type="text"
                        autoComplete="off"
                        onChange={handleChange}
                        error={errors.email && touched.email}
                        helperText={
                          errors.email && touched.email ? errors.email : null
                        }
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
                        onChange={handleChange}
                        error={errors.password && touched.password}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : null
                        }
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
                        disabled={loading}
                        className={classes.signInBtn}
                      >
                        {loading ? (
                          <SyncLoader size={10} color={"#fff"} />
                        ) : (
                          <span>Sign In</span>
                        )}
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
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
      {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        {success ? (
          <Alert onClose={handleClose} severity="success">
            You login successfully
          </Alert>
        ) : (
          <Alert severity="error" onClose={handleClose}>
            Some Error Occured!
          </Alert>
        )}
      </Snackbar> */}
    </div>
  );
};

export default SignIn;
