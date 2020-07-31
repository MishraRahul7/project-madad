import React from "react";
import { makeStyles, Grid, Typography, Link, Hidden } from "@material-ui/core";
import NewsCard from "../container/NewsCard";
import ProcessCard from "../container/ProcessCard";
import HeaderImage from "../images/headerImage3.png";
import midImage from "../images/mid.png";

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
    fontFamily: "Roboto",
  },
  headerImage: {
    height: "95vh",
    width: "100vw",
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  cardGrid: {
    width: "100vw",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
  },
  middleHeading: {
    color: "black",
    marginBottom: "15px",
    textTransform: "uppercase",
  },
  secondMiddle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    width: "100vw",
  },

  footer: {
    color: "white",
    backgroundColor: "#ef101a",
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {/*Middle*/}
        <Hidden smDown>
          <Grid item xs={12} className={classes.headerImage}></Grid>
        </Hidden>
        <Grid item xs={12} md={10} className={classes.secondMiddle}>
          <Typography
            variant="h4"
            align="center"
            className={classes.middleHeading}
          >
            Donation Process
          </Typography>
          <Typography align="center">
            <img src={midImage} alt="middleInage" style={{ height: "4vh" }} />
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={3} md={3} className={classes.processCard}>
              <ProcessCard
                heading="REGISTRATION"
                body="You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process."
                img="https://templates.bwlthemes.com/blood_donation/images/process_1.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ProcessCard
                heading="SCREENING"
                body="A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process."
                img="https://templates.bwlthemes.com/blood_donation/images/process_2.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ProcessCard
                heading="DONATION"
                body="After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes."
                img="https://templates.bwlthemes.com/blood_donation/images/process_3.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ProcessCard
                heading="REFRESHMENT
                "
                body="You can also stay in sitting room until you feel strong enough to leave our center. You will receive awesome drink from us in donation zone."
                img="https://templates.bwlthemes.com/blood_donation/images/process_4.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} className={classes.cardGrid}>
          <Typography
            variant="h4"
            align="center"
            className={classes.middleHeading}
          >
            Donation Campaigns
          </Typography>
          <Typography align="center">
            <img src={midImage} alt="middleInage" style={{ height: "4vh" }} />
          </Typography>
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
