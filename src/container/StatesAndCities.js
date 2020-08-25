import React, { useState } from 'react';
import csc from 'country-state-city';
import { Grid, makeStyles, Select, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  searchBtn: {
    color: '#ef101a',
    '&:hover': {
      color: 'white',
      backgroundColor: '#ef101a'
    }
  }
}));

const StatesAndCities = props => {
  const BloodGroup = [
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
    'All blood groups'
  ];
  const classes = useStyles();
  const stateList = csc.getStatesOfCountry('101');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [bg, setBloodGroup] = useState('');
  const cityList = csc.getCitiesOfState(state);

  const handleChaangeState = event => {
    const { value } = event.target;
    setState(value);
    const { name: stateName } = csc.getStateById(value);
    console.log(stateName)
  };

  const handleChangeCity = event => {
    const { value } = event.target;
    setCity(value);
  };

  const handleChangeBG = event => {
    const { value } = event.target;
    setBloodGroup(value);
  };

  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            name='states'
            displayEmpty
            variant='outlined'
            labelId='demo-simple-select-label'
            value={state}
            onChange={handleChaangeState}
          >
            <MenuItem value='' disabled>
              State
            </MenuItem>
            {stateList.map(val => (
              <MenuItem key={val.id} value={val.id}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            displayEmpty
            variant='outlined'
            labelId='demo-simple-select-label'
            name='city'
            value={city}
            onChange={handleChangeCity}
          >
            <MenuItem value='' disabled>
              Cities
            </MenuItem>
            {cityList.map(val => (
              <MenuItem key={val.id} value={val.name}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            displayEmpty
            variant='outlined'
            labelId='demo-simple-select-label'
            name='bgroup'
            value={bg}
            onChange={handleChangeBG}
          >
            <MenuItem value='' disabled>
              Blood Group
            </MenuItem>
            {BloodGroup.map(val => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Button variant='outlined' className={classes.searchBtn}>
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default StatesAndCities;
