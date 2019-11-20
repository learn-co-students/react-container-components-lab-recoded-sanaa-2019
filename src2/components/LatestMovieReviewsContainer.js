import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }
  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  }
  render() {
    const movies = this.state.reviews;

    return (
      <div className="latest-movie-reviews">
        {movies.map(movie => (
          <MovieReviews
            key={movie.display_title}
            name={movie.display_title}
            summaryShort={movie.summary_short}
            link={movie.link.url}
            src={movie.multimedia ? movie.multimedia.src : ""}
          />
        ))}
      </div>
    );
  }
}
