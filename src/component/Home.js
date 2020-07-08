import React from "react";
import { makeStyles, Grid, Typography, Link } from "@material-ui/core";
import NavBar from "../container/NavBar";
import NewsCard from "../container/NewsCard";
import HeaderImage from "../images/headerImage.jpg";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.rahul-mishra.com">
        Rahul Mishra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBEFF2",
  },
  headerImageDiv: {
    height: "85vh",
    width: "100vw",
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  middleHeading: {
    color: "#F20505",
    marginBottom: "15px",
    textTransform: "uppercase",
  },

  footer: {
    color: "white",
    backgroundColor: "#F20544",
    padding: theme.spacing(2),
  },
  cardGrid: {
    width: "100vw",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {/*Middle*/}
        <Grid item xs={12} className={classes.headerImageDiv}>
          {/* <img
            src={HeaderImage}
            className={classes.headerImage}
            alt="HeaderImage"
          /> */}
        </Grid>
        <Grid item xs={12} md={9} className={classes.cardGrid}>
          <Typography
            variant="h4"
            align="center"
            className={classes.middleHeading}
          >
            Donation Campaigns
          </Typography>
          <Typography align="center"></Typography>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 1" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 2" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 3" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 4" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 5" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NewsCard heading="News 6" />
            </Grid>
          </Grid>
        </Grid>
        {/*End Middle*/}
        {/*Footer*/}
        <Grid item xs={12} elivation={5} className={classes.footer}>
          <Copyright />
          <Typography variant="subtitle1" align="center">
            Made With{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            <Link color="inherit" href="https://reactjs.org/">
              ReactJS
            </Link>
          </Typography>
        </Grid>
        {/* End footer */}
      </Grid>
    </React.Fragment>
  );
};
export default Home;
