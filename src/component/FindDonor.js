import React, { useEffect } from "react";
import midImage from "../images/mid.png";
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

import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../actions";
import Cities from "../container/StatesAndCities";
import userImage from "../images/users.png";
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
    margin: theme.spacing(0, 0, 2),
  },
  midImage: {
    height: "4vh",
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
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
    height: "25vh",
    width: "60%",
    alignSelf: "center",
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
  cardHeadings: { color: "yellow", textAlign: "left", fontSize: "0.8em" },
  cardValues: { fontSize: "1.2em" },
}));

const FindDonor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.users);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  console.log(data.length);

  return (
    <React.Fragment>
      <Grid
        justify="center"
        alignItems="center"
        container
        className={classes.root}
      >
        <Grid item xs={12} md={10}>
          <Container className={classes.cardGrid}>
            <Typography variant="h4" align="center" className={classes.heading}>
              Find Blood Donor
            </Typography>
            <Typography align="center">
              <img
                src={midImage}
                className={classes.midImage}
                alt="middleInage"
              />
            </Typography>
            <Cities />
            <Grid container spacing={4}>
              {data.map((value, key) => (
                <Grid item key={key} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      image={`${userImage}`}
                      className={classes.profilePhoto}
                    ></CardMedia>
                    <CardContent className={classes.CardContent}>
                      <Typography className={classes.cardValues}>
                        <Grid item>
                          <span className={classes.cardHeadings}>Name:</span>
                        </Grid>
                        <Grid item>
                          {value.fname}&nbsp;{value.lname}
                        </Grid>
                      </Typography>
                      <Typography>
                        <Grid item>
                          <span className={classes.cardHeadings}>Phone:</span>
                        </Grid>
                        <Grid item>{value.phone}</Grid>
                      </Typography>
                      <Typography>
                        <Grid item>
                          <span className={classes.cardHeadings}>
                            Blood Group:
                          </span>
                        </Grid>
                        <Grid item>{value.bgroup}</Grid>
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
