import React from "react";
import NavBar from "../container/NavBar";
import {
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
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
  root: {
    backgroundColor: "#EBEFF2",
  },
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
        <CssBaseline />
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Container className={classes.cardGrid} maxWidth="md">
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
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        {/* Footer */}
        <Grid elivation={6} item xs={12} className={classes.footer}>
          <Typography variant="subtitle1" align="center" component="p">
            Developed By
          </Typography>
          <Copyright />
        </Grid>
        {/* End footer */}
      </Grid>
    </React.Fragment>
  );
};
export default FindDonor;
