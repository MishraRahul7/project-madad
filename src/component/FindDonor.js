import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import csc from 'country-state-city';

import { useSelector, useDispatch } from 'react-redux';
import { getAllUser, filteredData } from '../actions';

import userImage from '../images/users.png';
import midImage from '../images/mid.png';
function Copyright() {
  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://www.rahul-mishra.com'>
        Rahul Mishra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: { height: '100vh' },

  heading: {
    margin: theme.spacing(0, 0, 2)
  },
  midImage: {
    height: '4vh',
    marginBottom: theme.spacing(4)
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  cardGrid: {
    height: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  card: {
    backgroundColor: '#b40008',
    color: '#ffffff',
    height: '100%',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'column'
  },
  profilePhoto: {
    height: '23vh',
    width: '60%',
    alignSelf: 'center'
  },
  footer: {
    color: 'white',
    backgroundColor: '#ef101a',
    padding: theme.spacing(2)
  },
  CardContent: {
    fontFamily: 'Open Sans, sans',
    fontWeight: 300,
    color: 'white'
  },
  cardHeadings: { color: 'yellow', textAlign: 'left', fontSize: '0.8em' },
  cardValues: { fontSize: '1.2em' },
  searchBtn: {
    color: '#ef101a',
    '&:hover': {
      color: 'white',
      backgroundColor: '#ef101a'
    }
  }
}));

const FindDonor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
  const stateList = csc.getStatesOfCountry('101');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [bg, setBloodGroup] = useState('');

  const cityList = csc.getCitiesOfState(region);
  let data = useSelector(state => state.auth.users);
  console.log(data);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChaangeState = event => {
    const { value } = event.target;
    setRegion(value);
    // const { name: stateName } = csc.getStateById(value);
  };
  const handleChangeCity = event => {
    const { value } = event.target;
    setCity(value);
  };

  const handleChangeBG = event => {
    const { value } = event.target;
    setBloodGroup(value);
  };
  const handleSubmit = () => {
    const { name: regionName } = csc.getStateById(region);

  const filterData=data.filter(
      values =>
        values.states === regionName ||
        values.city === city ||
        values.bgroup === bg ||
        bg === 'All blood groups'
    );
    dispatch(filteredData(filterData));
  };
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <Grid
        justify='center'
        alignItems='center'
        container
        className={classes.root}
      >
        <Grid item xs={12} md={10}>
          <Container className={classes.cardGrid}>
            <Typography variant='h4' align='center' className={classes.heading}>
              Find Blood Donor
            </Typography>
            <Typography align='center'>
              <img
                src={midImage}
                className={classes.midImage}
                alt='middleInage'
              />
            </Typography>
            <Grid container justify='center' alignItems='center' spacing={4}>
              <Grid item xs={12} sm={4} md={3}>
                <Select
                  fullWidth
                  name='states'
                  displayEmpty
                  variant='outlined'
                  labelId='demo-simple-select-label'
                  value={region}
                  onChange={handleChaangeState}
                >
                  <MenuItem value=''>State</MenuItem>
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
                  <MenuItem value=''>Cities</MenuItem>
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
                  <MenuItem value=''>Blood Group</MenuItem>
                  {BloodGroup.map(val => (
                    <MenuItem key={val} value={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Button
                  variant='outlined'
                  fullWidth
                  size='large'
                  onClick={handleSubmit}
                  className={classes.searchBtn}
                >
                  SEARCH
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              {data.map((value, key) => (
                <Grid item key={key} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      image={`${userImage}`}
                      className={classes.profilePhoto}
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography className={classes.cardValues}>
                        <span className={classes.cardHeadings}>Name:</span>
                        <br />
                        {value.fname}&nbsp;{value.lname}
                      </Typography>
                      <Typography>
                        <span className={classes.cardHeadings}>Phone:</span>
                        <br />
                        {value.phone}{' '}
                      </Typography>
                      <Typography>
                        <span className={classes.cardHeadings}>
                          Blood Group:
                        </span>
                        <br />
                        {value.bgroup}
                      </Typography>
                      <Typography>
                        <span className={classes.cardHeadings}>Region:</span>
                        <br />
                        {value.city},&nbsp;{value.states}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        {/* Footer */}
        // <Grid elivation={6} item xs={12} className={classes.footer}>
        //   <Copyright />
        //   <Typography variant='subtitle1' align='center'>
        //     Made With{' '}
        //     <span role='img' aria-label='heart'>
        //       ❤️
        //     </span>{' '}
        //     <Link color='inherit' href='https://reactjs.org/'>
        //       ReactJS
        //     </Link>
        //   </Typography>
        // </Grid>
        {/* End footer */}
      </Grid>
    </React.Fragment>
  );
};
export default FindDonor;
