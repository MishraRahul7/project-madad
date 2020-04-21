import React from "react";
import NavBar from "../container/NavBar";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  },
  imageCorusel: {
    width: 700,
    height: 300,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: "#101726",
    color: "#ffffff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    color: "white",
    backgroundColor: "#011526",
    padding: theme.spacing(2),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

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
        <Grid item xs={12}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Typography variant="h3" align="center">
              News and Updates
            </Typography>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Developed By
          </Typography>
          <Copyright />
        </Grid>
        {/* End footer */}
      </Grid>
    </React.Fragment>
  );
};
export default Home;
