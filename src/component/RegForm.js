import React, { useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  makeStyles,
  Paper,
  Button,
} from "@material-ui/core";
import { Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Form } from "formik";
import * as Yup from "yup";
import csc from "country-state-city";
import NavBar from "../container/NavBar";
const PersonalDetailsSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ftrname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  dob: Yup.date().required("Required"),

  phone: Yup.number()
    .min(10, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  pincode: Yup.number()
    .min(6, "Too Short!")
    .max(7, "Too Long!")
    .required("Required"),
});
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

const RegForm = (props) => {
  const classes = useStyles();
  const gender = ["Male", "Female", "Other"];
  const BloodGroup = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const occupation = [
    "Student",
    "Business",
    "Professional",
    "Self Employed",
    "Government Employee",
    "Armed Forces",
    "Retired",
    "Other",
  ];
  const stateList = csc.getStatesOfCountry("101");

  const [states, setState] = useState("");
  const [city, setCity] = useState("");

  const cityList = csc.getCitiesOfState(states);

  const handleChaangeState = (event) => {
    setState(event.target.value);
  };

  const handleChaangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <React.Fragment>
      {" "}
      <Grid container justify="center" alignItems="center">
        <NavBar />
        <main className={classes.Reglayout}>
          <Paper elevation={5} className={classes.Regpaper}>
            <Typography component="h1" variant="h4" align="center">
              Registration
            </Typography>
            <Formik
              initialValues={{
                fname: "",
                lname: "",
                ftrname: "",
                dob: "",
                age: "",
                phone: "",
                email: "",
                address: "",
                pincode: "",
              }}
              validationSchema={PersonalDetailsSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        name="fname"
                        id="custom-css-outlined-input"
                        label="First Name"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        name="lname"
                        id="lastName"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        name="ftrname"
                        id="fatherName"
                        label="Father's name"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id="dob"
                        name="dob"
                        type="date"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={Select}
                        name="gender"
                        fullWidth
                        displayEmpty
                        variant="outlined"
                      >
                        <MenuItem disabled>Gender</MenuItem>
                        {gender.map((val) => (
                          <MenuItem key={val} value={val}>
                            {val}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={Select}
                        name="occupation"
                        fullWidth
                        displayEmpty
                        variant="outlined"
                      >
                        <MenuItem disabled>Occupation</MenuItem>
                        {occupation.map((val) => (
                          <MenuItem key={val} value={val}>
                            {val}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>{" "}
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={Select}
                        name="bgroup"
                        fullWidth
                        displayEmpty
                        variant="outlined"
                        labelId="bloodgroup"
                        id="bloodgroup"
                      >
                        <MenuItem disabled>Blood Group</MenuItem>
                        {BloodGroup.map((val) => (
                          <MenuItem key={val} value={val}>
                            {val}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        name="phone"
                        id="custom-css-outlined-input"
                        label="Phone"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        name="email"
                        id="custom-css-outlined-input"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Field
                        component={TextField}
                        name="address"
                        id="custom-css-outlined-input"
                        label="Address"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        name="state"
                        fullWidth
                        displayEmpty
                        value={states}
                        onChange={handleChaangeState}
                        variant="outlined"
                      >
                        <MenuItem value="" disabled>
                          State
                        </MenuItem>
                        {stateList.map((val) => (
                          <MenuItem key={val.id} value={val.id}>
                            {val.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        name="city"
                        fullWidth
                        value={city}
                        onChange={handleChaangeCity}
                        displayEmpty
                        variant="outlined"
                      >
                        <MenuItem value="" disabled>
                          City
                        </MenuItem>
                        {cityList.map((val) => (
                          <MenuItem key={val.id} value={val.id}>
                            {val.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        className={classes.SubmitButton}
                        size="large"
                        variant="outlined"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </main>
      </Grid>
    </React.Fragment>
  );
};

export default RegForm;
