import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Grid, Typography } from "@material-ui/core";
import logo from "../images/new-logo2.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none",
    "&:hover": {
      borderBottom: "2px solid #cb0911",
    },
  },
  appMenu: {
    backgroundColor: "#011526",
    color: "#101726",
    position: "static",
    margin: "auto",
    alignItems: "flex-end",

  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoPro: {
    height: "8vh",

  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appMenu}>
        <Grid direction="row" container>
          <Grid item md={4}>
            <Typography>
              <Link to="/" className={classes.link}>
                <img className={classes.logoPro} src={logo} alt="Madad" />
              </Link>
            </Typography>
          </Grid>
          <Grid item md={4}>
          
          <Typography variant="h6" className={classes.title}>
            <Link to="/find-donor" className={classes.link}>
              Find Donor
            </Link>
          </Typography>
          </Grid>
          <Grid item md={4}>
          
            <Typography variant="h6" className={classes.title}>
            <Link to="/registration" className={classes.link}>
              Become a Donor
            </Link>
          </Typography>
          </Grid>
          <Grid item md={4}>
          
          <Typography variant="h6" className={classes.title}>
            <Link to="/signin" className={classes.link}>
              Login
            </Link>
          </Typography>
          </Grid>
          </Grid>
      </AppBar>
    </div>
  );
}
