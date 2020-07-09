import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#b40008",
    color: "#0D0D0D",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
    color: "white",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardGrid: {
    padding: theme.spacing(2),
  },
  btn: {
    color: "white",
    borderColor: "white",
  },
}));
const ProcessCard = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={props.img} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h4">
              {props.heading}
            </Typography>
            <Typography>{props.body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default ProcessCard;
