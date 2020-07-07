import React from "react";
import {
  makeStyles,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import RegFormTwo from "./RegFormTwo";
import RegFormThree from "./RegFormThree";
import NavBar from "../container/NavBar";
import RegFormReview from "./RegFormReview";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBEFF2",
  },
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    color: "white",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    backgroundColor: "#101726",
    color: "white",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    backgroundColor: "#101726",
    padding: theme.spacing(3, 0, 5),
    color: "gray",
    "& .MuiStepLabel-active": {
      color: "white",
    },
    "& .MuiStepLabel-completed": {
      color: "Gray",
    },
    "& .MuiStepLabel-disabled": {
      color: "red",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    color: "white",
    backgroundColor: "#ac1c14",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#ac1c14",
    },
  },
}));

const steps = ["Personal Details", "Contact Details", "Registration Complete"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <RegFormTwo />;
    case 1:
      return <RegFormThree />;

    case 2:
      return <RegFormReview />;
    default:
      throw new Error("Unknown step");
  }
};



const RegForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <NavBar />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Registration
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <RegFormReview />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        color="default"
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="default"
                        onClick={steps.length - 1 === activeStep ?  () => {
                        history.push("/")
                      }:handleNext}
                      className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </Grid>
    </React.Fragment>
  );
};
export default RegForm;
