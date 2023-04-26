// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/*" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
