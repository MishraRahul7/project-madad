import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

// import useFormValidation from "../container/useFormValidation";
// import validateAuth from "../container/validateAuth";

// const INITIAL_STATE = {
//   fname: "",
//   lname: "",
//   ftrname: "",
//   dob: "",
//   age: "",
//   gender: "",
//   occupation: "",
//   bgroup: "",
// };
const RegFormTwo = (props) => {
  // const {
  //   handleSubmit,
  //   handleChange,
  //   habndleBlur,
  //   values,
  //   errors,
  //   isSubmitting,
  // } = useFormValidation(INITIAL_STATE, validateAuth);

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
      {/* <form onSubmit={handleSubmit}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="fname"
            id="custom-css-outlined-input"
            label="First Name"
            fullWidth
            variant="outlined"
            autoComplete="off"
            value={state.firstname}
            onChange={handleChangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lname"
            id="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.lastname}
            onChange={handleChangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="ftrname"
            id="fatherName"
            label="Father's name"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.fatherName}
            onChange={handleChangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dob"
            name="dob"
            label="Date Of Birth  DD/MM/YYYY"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.dob}
            onChange={handleChangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="age"
            name="age"
            label="Age"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={state.age}
            onChange={handleChangeState}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            name="gender"
            displayEmpty
            fullWidth
            variant="outlined"
            value={gen}
            onChange={handleChangeGender}
          >
            <MenuItem value="" disabled>
              Gender
            </MenuItem>
            {gender.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            name="occupation"
            fullWidth
            value={ocu}
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
            name="bgroup"
            fullWidth
            displayEmpty
            variant="outlined"
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
      </Grid>
      {/* </form> */}
    </React.Fragment>
  );
};

export default RegFormTwo;
