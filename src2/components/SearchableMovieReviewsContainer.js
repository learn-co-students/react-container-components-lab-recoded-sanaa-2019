import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const query = `${URL}&query=${this.state.searchTerm}`;
    fetch(query)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  };
  handelChange = e => {
    const searchTerm = e.target.value;

    this.setState({ searchTerm });
  };

  render() {
    const movies = this.state.reviews;
    return (
      <div className="searchable-movie-reviews col text-center">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="input-group m-1 mx-5">
            <input
              onChange={this.handelChange}
              type="text"
              name="search"
              id="search"
              className=""
              value={this.state.search}
            />
            <div className="input-group-append">
              <button className="btn btn-success">Search</button>
            </div>
          </div>
        </form>

        {movies.map(movie => (
          <MovieReviews
            key={movie.display_title}
            name={movie.display_title}
            summaryShort={movie.summary_short}
            link={movie.link.url}
            src={movie.multimedia ? movie.multimedia.src : ""}
            
          />
        ))}

        <hr />
      </div>
    );
  }
}
