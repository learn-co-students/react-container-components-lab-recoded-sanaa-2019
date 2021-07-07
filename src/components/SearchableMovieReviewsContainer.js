import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleInput = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    fetching = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({ reviews: data.results })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetching}>
                    <input type="text" onChange={event => this.handleInput(event)} value={this.state.searchTerm} />
                    <button>Button</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />


            </div>
        )
    }
}

