import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import FindDonor from "./FindDonor";
import SignIn from "./SignIn";
import Registration from "./RegForm";
import Profile from "./Profile";

import NavBar from "../container/NavBar";
import "../Style.css";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/find-donor" component={FindDonor} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </>
  );
};
export default App;
