import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles, Grid, Typography, Link } from "@material-ui/core";
import NavBar from "../container/NavBar";
import NewsCard from "../container/NewsCard";
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#F2B56B",
    padding: theme.spacing(2, 0, 2),
  },
  crousel: {
    height: "50vh",
    width: "100%",
  },
  imageCorusel: {
    width: 1100,
    height: 350,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    color: "white",
    backgroundColor: "#011526",
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
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <NavBar />
        <Grid item xs={12} className={classes.heroContent}>
          <Carousel className={classes.crousel} arrows rtl dots infinite>
            <img
              alt="1"
              className={classes.imageCorusel}
              src="https://www.pr-medicalevents.com/wp-content/uploads/2016/06/post-img.jpg"
            />
            <img
              alt="2"
              className={classes.imageCorusel}
              src="https://www.unic.ac.cy/wp-content/uploads/blood-donation-web-only-graphics.jpg"
            />
            <img
              alt="3"
              className={classes.imageCorusel}
              src="https://midlandhealthcare.org/wp-content/uploads/2019/09/blood-donations-camp-midland-healthcare-lucknow.jpg"
            />
          </Carousel>
        </Grid>
        <Grid item xs={12} md={10} className={classes.cardGrid}>
          <Typography
            variant="h4"
            align="center"
            style={{ textDecoration: "underline", marginBottom: "15px" }}
          >
            News and Update
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
            <Grid item xs={12} sm={6} md={3}>
              <NewsCard heading="News 4" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NewsCard heading="News 5" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NewsCard heading="News 6" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NewsCard heading="News 7" />
            </Grid>
          </Grid>
        </Grid>
        {/*Footer*/}
        <Grid elivation={6} item xs={12} className={classes.footer}>
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
