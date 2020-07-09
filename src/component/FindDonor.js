import React from "react";
import NavBar from "../container/NavBar";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import Cities from "../container/cities";
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
  heading: {
    margin: theme.spacing(0, 0, 4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: "#b40008",
    color: "#ffffff",
    height: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
  },
  profilePhoto: {
    height: "20vh",
    width: "100vw",
  },
  footer: {
    color: "white",
    backgroundColor: "#ef101a",
    padding: theme.spacing(2),
  },
  CardContent: {
    fontFamily: "Open Sans, sans",
    fontWeight: 300,
    color: "white",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const FindDonor = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        justify="center"
        alignItems="center"
        container
        className={classes.root}
      >
        <NavBar />
        <Grid item xs={12} md={10}>
          <Container className={classes.cardGrid}>
            {/* End hero unit */}
            <Typography variant="h4" align="center" className={classes.heading}>
              Find Blood Donor
            </Typography>
            <Typography className={classes.heading}>
              <Cities />
            </Typography>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.profilePhoto}
                      image="https://source.unsplash.com/random"
                    ></CardMedia>
                    <CardContent className={classes.CardContent}>
                      <Typography className={classes.hideDetailUser}>
                        Name:
                      </Typography>
                      <Typography className={classes.hideDetailUser}>
                        Phone:
                      </Typography>
                      <Typography className={classes.hideDetailUser}>
                        Address:
                      </Typography>
                      <Typography className={classes.hideDetailUser}>
                        Blood Group:
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        {/* Footer */}
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
export default FindDonor;
