import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Books from "./pages/books";
import Genres from "./pages/genres";
import About from "./pages/about";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/genres" component={Genres}></Route>
      </div>
    </Router>
  );
};
export default AppRouter;
