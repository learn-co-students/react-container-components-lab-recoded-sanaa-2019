import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  
  render() {
    const movies = this.state.reviews;

    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={movies} />
      </div>
    );
  }
}
