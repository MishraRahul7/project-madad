import React from "react";
import { Grid, Typography, MenuItem } from "@material-ui/core";
import { Formik, Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import { Form } from "formik";
import * as Yup from "yup";

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
});

const RegFormTwo = (props) => {
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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          ftrname: "",
          dob: "",
          age: "",
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
            </Grid>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RegFormTwo;
