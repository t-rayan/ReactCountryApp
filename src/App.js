import React from "react";
import CountryState from "./context/CountryContext/CountryState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CountryDetailsScreen from "./screens/CountryDetailsScreen";
import Navbar from "./components/Navbar/Navbar";
import ThemeState from "./context/ThemeContext/ThemeState";

function App() {
  return (
    <CountryState>
      <ThemeState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/:cname" exact component={CountryDetailsScreen} />
            </Switch>
          </div>
        </Router>
      </ThemeState>
    </CountryState>
  );
}

export default App;
