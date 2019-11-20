import React from "react";
import ReactDOM from "react-dom";

import LatestMovieReviewsContainer from "./components/LatestMovieReviewsContainer";
import SearchableMovieReviewsContainer from "./components/SearchableMovieReviewsContainer";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <div className="app ">
    <SearchableMovieReviewsContainer />
    <hr className="m-3" />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById("root")
);
