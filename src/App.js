import React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { Route, Switch, withRouter } from "react-router-dom";
import StatPage from "./components/StatPage/StatPage";
import NewsPage from "./components/NewsPage/NewsPage";
import MapPage from "./components/MapPage/MapPage";

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/statistic" render={() => <StatPage />} />
        <Route path="/map" render={() => <MapPage />} />
        <Route path="/news" render={() => <NewsPage />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
