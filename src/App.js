import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import SingleDrink from "./components/SingleDrink";
import About from "./components/About";
import Error from "./components/Error";
//import error y about

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/drink/:id">
          <SingleDrink />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
