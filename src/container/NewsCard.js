import React from "react";
import {
  Card,
  Grid,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#F20544",
    color: "#0D0D0D",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardGrid: {
    padding: theme.spacing(2, 2, 2, 2),
  },
  btn: {
    color: "white",
    borderColor: "white",
  },
}));
const NewsCard = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              size="small"
              align="right"
              className={classes.btn}
            >
              View full news
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default NewsCard;
