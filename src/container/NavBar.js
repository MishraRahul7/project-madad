import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/new-logo2.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    fontFamily: "Roboto",
    backgroundColor: "#ef101a",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textTransform: "uppercase",
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    "&:hover": {
      paddingBottom: "3px",
      borderBottom: "2px solid white",
    },
  },
  link1: {
    textTransform: "uppercase",
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
  },
  logoProp: {
    height: "8vh",
  },

  menuIcon: {
    position: "relative",
    fontSize: theme.spacing(4.5),
    color: "white",
    [theme.breakpoints.only("xs")]: {
      fontSize: theme.spacing(3.5),
    },
  },
  loginBtn: {
    borderColor: "white",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="default"
        elevation={3}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link to="/">
              <img className={classes.logoProp} src={logo} alt="Madad" />
            </Link>
          </Typography>
/*           <nav>
            <Hidden only="xs">
              <Link
                to="/find-donor"
                onClick={handleClose}
                className={classes.link}
              >
                Find Donor
              </Link>
              <Link
                to="/registration"
                onClick={handleClose}
                className={classes.link}
              >
                Become A Donor
              </Link>
              <Link to="/signin" onClick={handleClose} className={classes.link}>
                Login
              </Link>
            </Hidden>
          </nav>
          <Hidden mdUp smUp>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link
                  to="/find-donor"
                  onClick={handleClose}
                  className={classes.link1}
                >
                  Find Donor
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/registration"
                  onClick={handleClose}
                  className={classes.link1}
                >
                  Become A Donor
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/signin"
                  onClick={handleClose}
                  className={classes.link1}
                >
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>*/
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
