import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const RegFormTwo = () => {
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

  const [gen, setGender] = useState(gender);
  const [bg, setBloodGroup] = useState(BloodGroup);
  const [ocu, setOccupation] = useState(occupation);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeBG = (event) => {
    setBloodGroup(event.target.value);
  };
  const handleChangeOccupation = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            requireds
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="Father's name"
            fullWidth
            autoComplete="fathername"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherName"
            name="motherName"
            label="Mother's name"
            fullWidth
            autoComplete="mothername"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dob"
            name="dob"
            label="Date Of Birth"
            fullWidth
            autoComplete="dob"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            placeholder="DD/MM/YYYY"
            fullWidth
            autoComplete="age"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          Gender
          <Select
            fullWidth
            labelId="gender"
            id="gender"
            value={gen}
            onChange={handleChangeGender}
          >
            {gender.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          Occupation
          <Select
            fullWidth
            labelId="occupation"
            id="occupation"
            value={ocu}
            onChange={handleChangeOccupation}
          >
            {occupation.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>{" "}
        <Grid item xs={12} sm={4}>
          Blood Group
          <Select
            fullWidth
            labelId="bloodgroup"
            id="bloodgroup"
            value={bg}
            onChange={handleChangeBG}
          >
            {BloodGroup.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography>Organs that I wish to donate</Typography>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="All Organs"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Corneas (Eyes)"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Kidneys"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Heart"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Small Intestine"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Liver"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Pancreas"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Lungs"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Skin"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RegFormTwo;
