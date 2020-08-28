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
      
    </React.Fragment>
  );
};
export default StatesAndCities;
