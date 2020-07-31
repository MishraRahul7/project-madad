import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/registration" render={() => <Registration />} />
        <Route exact path="/find-donor" render={() => <FindDonor />} />
        <Route exact path="/profile" render={() => <Profile />} />
      </Switch>
    </>
  );
};
export default App;
