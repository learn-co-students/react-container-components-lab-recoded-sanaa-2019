import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3VGYfs6cW0PSV2oABBOB5qUDBZzGCY19';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews:[]
        }
    }

    componentDidMount(){
        fetch(URL).then(json=>json.json()).then(json=>this.setState({reviews:json.results}))
    }
    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />

            </div>
        )
    }
}

export default LatestMovieReviewsContainer
