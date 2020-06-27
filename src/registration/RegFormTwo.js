import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  makeStyles,
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  tColor: {
    color: "white",
  },
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "White !important",
  },
  whiteColor: {
    color: "white",
  },
  bordercolor: {
    color:"white",
    border: "1px solid white",
  },
}));

const RegFormTwo = (props) => {
  
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

  const [gen, setGender] = useState("");
  const [bg, setBloodGroup] = useState("");
  const [ocu, setOccupation] = useState("");

  const [state, setState] = useState("");

  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  console.log(state);
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="custom-css-outlined-input"
            placeholder="First Name"
            fullWidth
            InputProps={{
              className: classes.tColor,
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            variant="outlined"
            autoComplete="off"
            value={state.firstname}
            onChange={handleChangeState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            InputProps={{
              className: classes.tColor,
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.lastname}
            onChange={handleChangeState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            placeholder="Father's name"
            InputProps={{
              className: classes.tColor,
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.fatherName}
            onChange={handleChangeState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dob"
            name="dob"
            placeholder="Date Of Birth  DD/MM/YYYY"
            InputProps={{
              className: classes.tColor,
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.dob}
            onChange={handleChangeState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            placeholder="Age"
            InputProps={{
              className: classes.tColor,
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            variant="outlined"
            placeholder="DD/MM/YYYY"
            fullWidth
            autoComplete="off"
            value={state.age}
            onChange={handleChangeState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            labelId="gender"
            id="gender"
            displayEmpty
            variant="outlined"
            value={gen}
            classes={{
              root: classes.bordercolor,
              icon: classes.whiteColor,
            }}
            onChange={handleChangeGender}
          >
            <MenuItem value="">Gender</MenuItem>
            {gender.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            labelId="occupation"
            id="occupation"
            value={ocu}
            classes={{
              root: classes.bordercolor,
              icon: classes.whiteColor,
            }}
            displayEmpty
            variant="outlined"
            onChange={handleChangeOccupation}
          >
            <MenuItem value="" disabled>
              Occupation
            </MenuItem>
            {occupation.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>{" "}
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            displayEmpty
            variant="outlined"
            classes={{
              root: classes.bordercolor,
              icon: classes.whiteColor,
            }}
            labelId="bloodgroup"
            id="bloodgroup"
            value={bg}
            onChange={handleChangeBG}
          >
            <MenuItem value="" disabled>
              Blood Group
            </MenuItem>
            {BloodGroup.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <Typography>Organs that I wish to donate</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Heart"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Corneas (Eyes)"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Kidneys"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Liver"
          />{" "}
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Pancreas"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Skin"
          />{" "}
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Lungs"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="Small Intestine"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" className={classes.whiteColor} />
            }
            label="All Organs"
          />{" "}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RegFormTwo;
