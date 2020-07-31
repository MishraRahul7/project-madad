import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import FindDonor from "./FindDonor";
import SignIn from "./SignIn";
import Registration from "./RegForm";
import Profile from "./Profile";
import NavBar from "../container/NavBar";
import NavBarP from "../container/NavBarP";
import "../Style.css";
import { useSelector } from "react-redux";

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  if (!isSignedIn) {
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
  } else {
    return (
      <>
        <NavBarP />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/find-donor" render={() => <FindDonor />} />
          <Route exact path="/profile" render={() => <Profile />} />
        </Switch>
      </>
    );
  }
};
export default App;
