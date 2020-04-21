import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: "30px",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "4px solid white",
    },
  },
  title2: {
    marginRight: "1000px",
    textDecoration: "none",
  },
  appMenu: {
    backgroundColor: "#011526",
    color: "#101726",
    position: "static",
    margin: "auto",
    alignItems: "flex-end",
    width: "100vw",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appMenu}>
        <Toolbar>
          <Typography variant="h5" className={classes.title2}>
            <Link to="/" className={classes.link}>
              Madad
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/find-donor" className={classes.link}>
              Find Donor
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/signup" className={classes.link}>
              Become a Donor
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/signin" className={classes.link}>
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
