import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  makeStyles,
  TextField,
  FormControl,
  Paper,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";
import { Form } from "formik";
import * as Yup from "yup";
import csc from "country-state-city";
import { signUp } from "../actions";

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
    .min(17, "You are not eligible")
    .max(65, "You are not eligible!")
    .required("Required"),
  weight: Yup.number()
    .min(45, "You are not eligible")
    .max(110, "You are not eligible!")
    .required("Required"),
  dob: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  occupation: Yup.string().required("Required"),
  bgroup: Yup.string().required("Required"),
  address: Yup.string()
    .required("Required")
    .max(100, "Too Long")
    .min(5, "Too short"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  phone: Yup.number().min(10).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(20, "Password too long")
    .required("Required"),
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

  const dispatch = useDispatch();

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
        <main className={classes.Reglayout}>
          <Paper elevation={5} className={classes.Regpaper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              style={{ paddingBottom: "10px" }}
            >
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
                gender: "",
                occupation: "",
                state: "",
                city: "",
                bgroup: "",
                weight: "",
                password: "",
              }}
              validationSchema={PersonalDetailsSchema}
              onSubmit={(values) => {
                dispatch(signUp(values));
                console.log(values);
              }}
            >
              {({ errors, handleChange, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="fname"
                        error={errors.fname && touched.fname}
                        onChange={handleChange}
                        helperText={
                          errors.fname && touched.fname ? errors.fname : null
                        }
                        name="fname"
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
                      <TextField
                        id="lname"
                        error={errors.lname && touched.lname}
                        onChange={handleChange}
                        helperText={
                          errors.lname && touched.lname ? errors.lname : null
                        }
                        name="lname"
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
                      <TextField
                        id="ftrname"
                        error={errors.ftrname && touched.ftrname}
                        onChange={handleChange}
                        helperText={
                          errors.ftrname && touched.ftrname
                            ? errors.ftrname
                            : null
                        }
                        name="ftrname"
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
                      <TextField
                        id="dob"
                        error={errors.dob && touched.dob}
                        onChange={handleChange}
                        helperText={
                          errors.dob && touched.dob ? errors.dob : null
                        }
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
                      <TextField
                        id="age"
                        error={errors.age && touched.age}
                        onChange={handleChange}
                        helperText={
                          errors.age && touched.age ? errors.age : null
                        }
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
                      <TextField
                        id="weight"
                        error={errors.weight && touched.weight}
                        onChange={handleChange}
                        helperText={
                          errors.weight && touched.weight ? errors.weight : null
                        }
                        name="weight"
                        label="Weight"
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
                      <FormControl>
                        <Select
                          id="gender"
                          error={errors.gender && touched.gender}
                          onChange={handleChange}
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
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        component={Select}
                        id="occupation"
                        error={errors.occupation && touched.occupation}
                        onChange={handleChange}
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
                      </Select>
                    </Grid>{" "}
                    <Grid item xs={12} sm={6}>
                      <Select
                        component={Select}
                        id="bgroup"
                        error={errors.bgroup && touched.bgroup}
                        onChange={handleChange}
                        name="bgroup"
                        fullWidth
                        displayEmpty
                        variant="outlined"
                        labelId="bloodgroup"
                      >
                        <MenuItem disabled>Blood Group</MenuItem>
                        {BloodGroup.map((val) => (
                          <MenuItem key={val} value={val}>
                            {val}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="phone"
                        error={errors.phone && touched.phone}
                        onChange={handleChange}
                        helperText={
                          errors.phone && touched.phone ? errors.phone : null
                        }
                        name="phone"
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
                      <TextField
                        id="email"
                        error={errors.email && touched.email}
                        onChange={handleChange}
                        helperText={
                          errors.email && touched.email ? errors.email : null
                        }
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="password"
                        error={errors.password && touched.password}
                        onChange={handleChange}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : null
                        }
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="address"
                        error={errors.address && touched.address}
                        onChange={handleChange}
                        helperText={
                          errors.address && touched.address
                            ? errors.address
                            : null
                        }
                        name="address"
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
                        id="state"
                        error={errors.state && touched.state}
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
                        id="city"
                        error={errors.city && touched.city}
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
                        type="submit"
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
